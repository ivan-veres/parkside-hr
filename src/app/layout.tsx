'use client'

import { useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import CookieConsent from './components/CookieConsent'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta',
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

    return (
        <html lang="hr" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
            <head>
                <title>Park Side | Priroda i Zajednica</title>
                <meta name="description" content="Otkrijte Park Side - gdje se priroda susreće s zajednicom. Istražite naše zelene površine, događanja i aktivnosti." />
                <meta name="keywords" content="park, priroda, zajednica, zelene površine, događanja, opuštanje" />
                <link rel="alternate" hrefLang="hr" href="https://parkside.hr" />
                <meta property="og:title" content="Park Side | Priroda i Zajednica" />
                <meta property="og:description" content="Otkrijte Park Side - gdje se priroda susreće s zajednicom." />
                <meta property="og:type" content="website" />
            </head>
            <body suppressHydrationWarning={true}>
                <GoogleReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                    scriptProps={{
                        async: true,
                        defer: true,
                        appendTo: 'head',
                    }}
                >
                    {children}
                    <CookieConsent onAccept={() => setAnalyticsEnabled(true)} />
                </GoogleReCaptchaProvider>
                {analyticsEnabled && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />}
            </body>
        </html>
    )
}

