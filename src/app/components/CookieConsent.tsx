'use client'

import { useState, useEffect } from 'react'
import styles from './CookieConsent.module.css'

interface CookieConsentProps {
    onAccept?: () => void
    onDecline?: () => void
}

export default function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
    const [showBanner, setShowBanner] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 1000)
        } else if (consent === 'accepted' && onAccept) {
            onAccept()
        }
    }, [onAccept])

    const handleClose = (consent: string) => {
        setIsClosing(true)
        localStorage.setItem('cookie-consent', consent)

        if (consent === 'accepted' && onAccept) {
            onAccept()
        } else if (consent === 'declined' && onDecline) {
            onDecline()
        }

        // Wait for animation to complete before hiding
        setTimeout(() => {
            setShowBanner(false)
        }, 400) // Match animation duration
    }

    const acceptCookies = () => {
        handleClose('accepted')
    }

    const declineCookies = () => {
        handleClose('declined')
    }

    if (!showBanner) return null

    return (
        <div className={`${styles.overlay} ${isClosing ? styles.closing : ''}`}>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className={styles.text}>
                        <h3 className={styles.title}>Cookie Notice</h3>
                        <p className={styles.description}>
                            We use cookies to enhance your experience and analyze site traffic via Google Analytics. This site also uses Google reCAPTCHA.
                            By continuing, you accept our use of cookies and agree to Google&apos;s{' '}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                                Terms of Service
                            </a>.
                        </p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button onClick={declineCookies} className={styles.declineButton}>
                        Decline
                    </button>
                    <button onClick={acceptCookies} className={styles.acceptButton}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}
