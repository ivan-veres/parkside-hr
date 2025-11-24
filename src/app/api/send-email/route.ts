import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailRequest {
  name: string
  email: string
  offer: string
  message: string
  recaptchaToken: string
}

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()

    if (!data.success) {
      return { success: false, error: 'reCAPTCHA verification failed' }
    }

    // Check score (0.0 - 1.0, higher is better)
    // 0.5 is a good threshold - adjust based on your needs
    if (data.score < 0.5) {
      return { success: false, score: data.score, error: 'Low reCAPTCHA score - possible spam' }
    }

    return { success: true, score: data.score }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return { success: false, error: 'reCAPTCHA verification failed' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.offer || !body.recaptchaToken) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(body.recaptchaToken)
    if (!recaptchaResult.success) {
      console.warn('reCAPTCHA failed:', recaptchaResult.error, 'Score:', recaptchaResult.score)
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 403 }
      )
    }

    console.log('reCAPTCHA passed with score:', recaptchaResult.score)

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'info@jotunn.eu',
      subject: `Domain Offer for Parkside.hr - ${body.offer}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0A2540 0%, #1A3A5C 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .domain {
                color: #F59E0B;
                font-weight: bold;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 6px;
                border-left: 4px solid #F59E0B;
              }
              .field-label {
                font-weight: 600;
                color: #0A2540;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                color: #1E293B;
                font-size: 16px;
              }
              .offer {
                font-size: 24px;
                font-weight: bold;
                color: #F59E0B;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #E2E8F0;
                color: #64748B;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Domain Offer for <span class="domain">Parkside.hr</span></h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Offer Amount</div>
                <div class="field-value offer">${body.offer}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${body.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${body.email}" style="color: #F59E0B; text-decoration: none;">
                    ${body.email}
                  </a>
                </div>
              </div>
              
              ${body.message ? `
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value">${body.message.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
              
              <div class="footer">
                <p>This email was sent from the Parkside.hr domain sale landing page.</p>
                <p>Received at ${new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Zagreb'
      })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Domain Offer for Parkside.hr

Offer Amount: ${body.offer}
Name: ${body.name}
Email: ${body.email}

${body.message ? `Message:\n${body.message}` : ''}

---
Received at ${new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Zagreb'
      })}
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
