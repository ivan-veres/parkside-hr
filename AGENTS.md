# AGENTS.md

This project is a simple, professional landing page for the parkside.hr domain sale with a contact form protected by reCAPTCHA.

As an agent, follow the instructions in this file to deliver a clean, secure, and conversion-optimized domain sale page.

## TL;DR for Agents

- **Always load skills first**: Before any task, run `.agents/skills/using-skills/find-skills [PATTERN]`, read relevant skills, announce them, and follow them exactly.
- **Keep it simple**: This is a single-page static site with minimal JavaScript
- **Security first**: Implement reCAPTCHA properly to prevent spam
- **Mobile-first design**: Most visitors will be on mobile devices
- **Fast loading**: Optimize for speed to maintain professional impression

## Project Context (Canonical)

**Parkside.hr Domain Sale Landing Page** is a single-page website that:
- Displays that the domain parkside.hr is for sale
- Provides professional presentation to maximize domain value
- Includes a contact form with reCAPTCHA v3 protection
- Sends form submissions via email or stores them securely
- Loads fast and works on all devices
- Is SEO-optimized for domain sale searches

## Tech Stack

**Recommended Stack Options:**

### Option 1: Next.js (Modern, Easy Deployment)
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Form Handling**: Server Actions + Email (Resend/SendGrid)
- **reCAPTCHA**: Google reCAPTCHA v3
- **Deployment**: Vercel (free tier)
- **Why**: Zero-config deployment, serverless functions for form handling

### Option 2: Static HTML + Serverless (Simplest)
- **Frontend**: HTML + CSS + Vanilla JS
- **Form Handling**: Cloudflare Workers / Netlify Functions
- **reCAPTCHA**: Google reCAPTCHA v3
- **Deployment**: Cloudflare Pages / Netlify (free tier)
- **Why**: Minimal complexity, extremely fast loading

### Option 3: Node.js + Express (Full Control)
- **Backend**: Node.js + Express
- **Frontend**: EJS templates or static HTML
- **Form Handling**: Nodemailer
- **reCAPTCHA**: Google reCAPTCHA v3
- **Deployment**: Railway / Render (free tier)
- **Why**: Full control over backend logic

**Recommended for this project: Option 1 (Next.js)** - Best balance of simplicity and features.

## Required Environment Variables

```env
# reCAPTCHA (Get from https://www.google.com/recaptcha/admin)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key-here
RECAPTCHA_SECRET_KEY=your-secret-key-here

# Email Service (Choose one)
# Option A: Resend (recommended, easiest)
RESEND_API_KEY=re_your_key_here
EMAIL_TO=your-email@example.com

# Option B: SendGrid
SENDGRID_API_KEY=SG.your_key_here
EMAIL_TO=your-email@example.com

# Option C: SMTP (any provider)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_TO=your-email@example.com
```

## Project Structure

```
parkside-hr/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form API endpoint
├── components/
│   ├── ContactForm.tsx          # Contact form with reCAPTCHA
│   ├── Hero.tsx                 # Hero section
│   └── Footer.tsx               # Footer
├── lib/
│   ├── recaptcha.ts             # reCAPTCHA validation
│   └── email.ts                 # Email sending logic
├── public/
│   └── og-image.png             # Open Graph image
├── .env.local                   # Environment variables (not committed)
├── .env.example                 # Template for environment variables
├── AGENTS.md                    # This file
└── README.md                    # Setup instructions
```

## Core Requirements

### 1. Landing Page Content

**Must include:**
- Clear headline: "parkside.hr - Domain For Sale"
- Professional description of the domain value
- Contact form (name, email, message, phone optional)
- reCAPTCHA v3 (invisible, scores requests)
- Professional design (trust signals)
- Fast loading (< 2 seconds)

**Optional but recommended:**
- Domain stats (age, keyword value, potential uses)
- Call-to-action button
- Trust badges
- Multiple contact methods (email, phone)

### 2. Contact Form Requirements

**Fields:**
- Name (required, 2-50 characters)
- Email (required, valid email format)
- Phone (optional, international format)
- Message (required, 10-500 characters)
- reCAPTCHA v3 (invisible, threshold 0.5)

**Validation:**
- Client-side validation (instant feedback)
- Server-side validation (security)
- Rate limiting (max 5 submissions per IP per hour)
- Sanitize all inputs

**Security:**
- reCAPTCHA v3 verification on backend
- CSRF protection
- Input sanitization (prevent XSS)
- Rate limiting
- Bot detection

### 3. reCAPTCHA v3 Implementation

**Setup:**
1. Register site at https://www.google.com/recaptcha/admin
2. Choose reCAPTCHA v3
3. Add domain: parkside.hr
4. Get site key and secret key

**Client-side:**
```typescript
// Load reCAPTCHA script in layout.tsx
<Script
  src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
  strategy="lazyOnload"
/>

// Execute reCAPTCHA on form submit
const token = await grecaptcha.execute(siteKey, { action: 'contact' });
```

**Server-side validation:**
```typescript
// Verify token with Google API
const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `secret=${secretKey}&response=${token}`,
});

const data = await response.json();
if (!data.success || data.score < 0.5) {
  throw new Error('reCAPTCHA verification failed');
}
```

### 4. Email Service Setup

**Option A: Resend (Recommended)**
```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@parkside.hr',
  to: process.env.EMAIL_TO,
  subject: 'New Contact Form Submission - parkside.hr',
  html: emailTemplate,
});
```

**Option B: Nodemailer (SMTP)**
```bash
npm install nodemailer
```

### 5. Design Guidelines

**Colors:**
- Professional: Navy blue, white, light gray
- Trust: Blue conveys reliability
- Contrast: Ensure accessibility (WCAG AA)

**Typography:**
- Heading: Clear, bold sans-serif
- Body: Readable, 16px minimum
- Mobile-friendly line height (1.6)

**Layout:**
- Single page, scroll-to-form
- Hero section with domain name
- Features/benefits section
- Contact form section
- Footer with basic info

**Responsive:**
- Mobile-first design
- Breakpoints: 640px, 768px, 1024px
- Touch-friendly buttons (min 44px)

## Development Workflow

### Initial Setup

```bash
# Create Next.js project
npx create-next-app@latest parkside-hr --typescript --tailwind --app

# Navigate to project
cd parkside-hr

# Install dependencies
npm install resend zod

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your keys
# Get reCAPTCHA keys from https://www.google.com/recaptcha/admin
# Get Resend API key from https://resend.com

# Start development server
npm run dev
```

### Testing Checklist

**Functionality:**
- [ ] Form submits successfully
- [ ] Email arrives with all form data
- [ ] reCAPTCHA blocks bot submissions
- [ ] Validation messages show correctly
- [ ] Success message displays after submission

**Security:**
- [ ] reCAPTCHA v3 working (check score in logs)
- [ ] Rate limiting prevents spam
- [ ] XSS attacks prevented (try `<script>alert('xss')</script>`)
- [ ] SQL injection prevented (if using database)
- [ ] Environment variables not exposed

**Performance:**
- [ ] Page loads in < 2 seconds
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] No console errors
- [ ] Works offline (static content)

**Responsive:**
- [ ] Works on mobile (test on real device)
- [ ] Works on tablet
- [ ] Works on desktop
- [ ] Touch targets min 44px
- [ ] Forms usable on small screens

**SEO:**
- [ ] Meta tags present (title, description)
- [ ] Open Graph tags for social sharing
- [ ] Structured data (JSON-LD) for domain sale
- [ ] Robots.txt allows indexing
- [ ] Sitemap.xml generated

### Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard
# https://vercel.com/your-username/parkside-hr/settings/environment-variables

# Deploy to production
vercel --prod

# Configure custom domain
# In Vercel dashboard: Settings > Domains > Add parkside.hr
# Update DNS records as instructed by Vercel
```

### DNS Configuration

**Required DNS Records:**
```
# Point domain to Vercel
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com

# Email (if using custom domain for sending)
MX    @     (your email provider's MX records)
TXT   @     (SPF, DKIM records from your email provider)
```

## SEO Optimization

### Meta Tags (Essential)

```typescript
// app/layout.tsx or page.tsx
export const metadata = {
  title: 'parkside.hr - Premium .hr Domain For Sale',
  description: 'Professional Croatian domain name parkside.hr available for purchase. Perfect for real estate, coworking spaces, or business ventures in Croatia.',
  keywords: 'parkside.hr, domain for sale, Croatian domain, .hr domain, premium domain',
  openGraph: {
    title: 'parkside.hr - Premium Domain For Sale',
    description: 'Professional Croatian domain name available for purchase',
    url: 'https://parkside.hr',
    siteName: 'parkside.hr',
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
};
```

### Structured Data

```typescript
// Add to page.tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "parkside.hr Domain",
  "description": "Premium Croatian .hr domain name for sale",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "price": "Contact for price"
  }
};
```

## Security Best Practices

1. **Never commit secrets**: Use `.env.local`, add to `.gitignore`
2. **Validate all inputs**: Client AND server side
3. **Rate limiting**: Prevent abuse (5 submissions/hour per IP)
4. **Sanitize inputs**: Use libraries like DOMPurify or validator
5. **Use HTTPS**: Vercel provides automatically
6. **Set security headers**: CSP, X-Frame-Options, etc.
7. **Monitor submissions**: Set up email alerts for unusual activity

## Troubleshooting

### Common Issues

**reCAPTCHA not working:**
- Check site key is correct in environment variable
- Ensure domain is registered in reCAPTCHA admin
- Check browser console for errors
- Verify secret key on server side

**Emails not sending:**
- Check API key is valid
- Verify email addresses are correct
- Check spam folder
- Review service provider logs (Resend dashboard)

**Form not submitting:**
- Check browser console for errors
- Verify API endpoint is accessible
- Check network tab for failed requests
- Review server logs

**Slow page load:**
- Optimize images (use Next.js Image component)
- Remove unused dependencies
- Enable caching headers
- Use Vercel Analytics to identify bottlenecks

## Skills System Integration

**Always check for skills before starting work:**

```bash
.agents/skills/using-skills/find-skills [PATTERN]
```

Common patterns for this project:
- `next` - Next.js best practices
- `form` - Form handling and validation
- `security` - Security implementation
- `test` - Testing strategies
- `deploy` - Deployment workflows

## Agent Principles

- **Keep it simple**: Don't over-engineer a landing page
- **Security first**: This is a public-facing form, prioritize security
- **Professional appearance**: This represents a domain sale, make it look valuable
- **Fast loading**: Speed creates trust and improves conversion
- **Test thoroughly**: Test form submission, validation, and reCAPTCHA

## Success Criteria

The project is complete when:
- ✅ Page loads and displays professional domain sale message
- ✅ Contact form submits successfully
- ✅ Emails arrive with correct information
- ✅ reCAPTCHA successfully blocks bots (test with score < 0.5)
- ✅ Page is responsive on all devices
- ✅ Lighthouse score > 90
- ✅ No console errors
- ✅ Deployed to production on parkside.hr
- ✅ DNS configured correctly
- ✅ HTTPS working

---

This document serves as the primary guide for AI agents working on the parkside.hr domain sale landing page. Follow these guidelines to ensure a professional, secure, and conversion-optimized result.
