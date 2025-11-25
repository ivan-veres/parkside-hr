'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import styles from './ContactForm.module.css'

interface FormData {
    name: string
    email: string
    offer: string
    message: string
}

export default function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        offer: '',
        message: ''
    })

    const [status, setStatus] = useState<string>('')
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!executeRecaptcha) {
            setStatus('reCAPTCHA nije učitan. Molimo osvježite stranicu.')
            setStatusType('error')
            return
        }

        setIsSubmitting(true)
        setStatus('')
        setStatusType('')

        try {
            // Execute reCAPTCHA to get token
            const recaptchaToken = await executeRecaptcha('submit_offer')

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('Hvala! Vaša poruka je uspješno poslana.')
                setStatusType('success')
                // Reset form after successful submission
                setTimeout(() => {
                    setFormData({ name: '', email: '', offer: '', message: '' })
                    setStatus('')
                    setStatusType('')
                }, 5000)
            } else {
                setStatus(`Greška: ${data.error || 'Neuspjelo slanje poruke. Molimo pokušajte ponovno.'}`)
                setStatusType('error')
            }
        } catch (error) {
            console.error('Submission error:', error)
            setStatus('Mrežna greška. Molimo provjerite svoju vezu i pokušajte ponovno.')
            setStatusType('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>


                    <div className={styles.formWrapper}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {!mounted ? (
                                <div className={styles.loadingPlaceholder}>
                                    <div className={styles.spinner}></div>
                                    <p>Učitavanje obrasca...</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className={styles.title}>Pridružite se Zajednici</h2>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>
                                            Ime i Prezime *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            disabled={isSubmitting}
                                            className={styles.input}
                                            placeholder="Ivan Horvat"
                                            aria-label="Ime i Prezime"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email Adresa *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            disabled={isSubmitting}
                                            className={styles.input}
                                            placeholder="ivan@primjer.com"
                                            aria-label="Email Adresa"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="offer" className={styles.label}>
                                            Tema *
                                        </label>
                                        <input
                                            type="text"
                                            id="offer"
                                            name="offer"
                                            value={formData.offer}
                                            onChange={handleChange}
                                            required
                                            aria-required="true"
                                            disabled={isSubmitting}
                                            className={styles.input}
                                            placeholder="Opći Upit"
                                            aria-label="Tema"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>
                                            Poruka
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            rows={5}
                                            className={styles.textarea}
                                            placeholder="Recite nam kako ste proveli dan u parku"
                                            aria-label="Poruka"
                                        />
                                    </div>

                                    {status && (
                                        <div
                                            className={`${styles.status} ${statusType === 'success' ? styles.statusSuccess : styles.statusError}`}
                                            role="alert"
                                            aria-live="polite"
                                        >
                                            {status}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className={styles.spinner} viewBox="0 0 24 24" fill="none">
                                                    <circle className={styles.spinnerCircle} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                </svg>
                                                Šaljem...
                                            </>
                                        ) : (
                                            <>
                                                Pošalji Poruku
                                                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                    <p className={styles.disclaimer}>
                                        Ova stranica je zaštićena s reCAPTCHA i primjenjuju se Google
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Politika Privatnosti</a> i
                                        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer"> Uvjeti Korištenja</a>.
                                    </p>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
