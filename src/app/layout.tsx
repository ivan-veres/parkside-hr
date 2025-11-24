import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

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

export const metadata: Metadata = {
    title: 'Premium Domain For Sale | Parkside.hr',
    description: 'Acquire this premium Croatian domain name - perfect for LIDL\'s PARKSIDE brand expansion into Croatia. Premium .hr extension for local market presence.',
    keywords: 'domain for sale, premium domain, parkside.hr, Croatian domain, LIDL PARKSIDE, Croatia domain',
    openGraph: {
        title: 'Premium Domain For Sale | Parkside.hr',
        description: 'Acquire this premium Croatian domain name for LIDL\'s PARKSIDE brand.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
            <body>{children}</body>
        </html>
    )
}
