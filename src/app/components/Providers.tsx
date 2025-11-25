'use client'

import { useState } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from './CookieConsent'

export default function Providers({ children }: { children: React.ReactNode }) {
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

    return (
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
            {analyticsEnabled && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />}
        </GoogleReCaptchaProvider>
    )
}
