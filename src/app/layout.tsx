'use client'

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
    return (
        <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
            <head>
                <title>Premium Domain For Sale | Parkside.hr</title>
                <meta name="description" content="Acquire this premium Croatian domain name - perfect for LIDL's PARKSIDE brand expansion into Croatia. Premium .hr extension for local market presence." />
                <meta name="keywords" content="domain for sale, premium domain, parkside.hr, Croatian domain, LIDL PARKSIDE, Croatia domain" />
                <meta property="og:title" content="Premium Domain For Sale | Parkside.hr" />
                <meta property="og:description" content="Acquire this premium Croatian domain name for LIDL's PARKSIDE brand." />
                <meta property="og:type" content="website" />
            </head>
            <body>
                <GoogleReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                    scriptProps={{
                        async: true,
                        defer: true,
                        appendTo: 'head',
                    }}
                >
                    {children}
                    <CookieConsent />
                </GoogleReCaptchaProvider>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
            </body>
        </html>
    )
}

