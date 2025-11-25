import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Providers from './components/Providers'
import './globals.css'
import { Metadata } from 'next'

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
    title: 'Park Side | Priroda i Zajednica',
    description: 'Otkrijte Park Side - gdje se priroda susreće s zajednicom. Istražite naše zelene površine, događanja i aktivnosti.',
    keywords: 'park, priroda, zajednica, zelene površine, događanja, opuštanje',
    alternates: {
        languages: {
            'hr': 'https://parkside.hr',
        },
    },
    openGraph: {
        title: 'Park Side | Priroda i Zajednica',
        description: 'Otkrijte Park Side - gdje se priroda susreće s zajednicom.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="hr" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning={true}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}

