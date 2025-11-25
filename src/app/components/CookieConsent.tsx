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
                        <h3 className={styles.title}>Obavijest o Kolačićima</h3>
                        <p className={styles.description}>
                            Koristimo kolačiće kako bismo poboljšali vaše iskustvo i analizirali promet na stranici putem Google Analyticsa. Ova stranica također koristi Google reCAPTCHA.
                            Više informacija potražite u našoj <a href="/privacy-policy" className={styles.link}>Politici Privatnosti</a>.
                            Nastavkom prihvaćate našu upotrebu kolačića i slažete se s Googleovim{' '}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Pravilima privatnosti
                            </a>{' '}
                            i{' '}
                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                                Uvjetima pružanja usluge
                            </a>.
                        </p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button onClick={declineCookies} className={styles.declineButton}>
                        Odbij
                    </button>
                    <button onClick={acceptCookies} className={styles.acceptButton}>
                        Prihvati
                    </button>
                </div>
            </div>
        </div >
    )
}
