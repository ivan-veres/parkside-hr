'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import styles from './ContactForm.module.css'

interface FormData {
    name: string
    email: string
    offer: string
    message: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        offer: '',
        message: ''
    })

    const [status, setStatus] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Create mailto link with form data
        const subject = encodeURIComponent(`Domain Offer for Parkside.hr - ${formData.offer}`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nOffer Amount: ${formData.offer}\n\nMessage:\n${formData.message}`
        )

        window.location.href = `mailto:contact@parkside.hr?subject=${subject}&body=${body}`

        setStatus('Opening your email client...')

        // Reset form after a delay
        setTimeout(() => {
            setFormData({ name: '', email: '', offer: '', message: '' })
            setStatus('')
        }, 2000)
    }

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Make an Offer</h2>
                        <p className={styles.subtitle}>
                            Interested in acquiring this premium domain? Submit your offer below and we&apos;ll get back to you promptly.
                        </p>

                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Quick Response</h4>
                                    <p className={styles.infoText}>We respond to all serious inquiries within 24 hours</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Secure Transfer</h4>
                                    <p className={styles.infoText}>Safe and secure domain transfer via escrow service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="offer" className={styles.label}>
                                    Your Offer *
                                </label>
                                <input
                                    type="text"
                                    id="offer"
                                    name="offer"
                                    value={formData.offer}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="$10,000"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={styles.textarea}
                                    placeholder="Tell us about your business and plans for this domain..."
                                />
                            </div>

                            {status && (
                                <div className={styles.status}>{status}</div>
                            )}

                            <button type="submit" className={styles.submitButton}>
                                Submit Offer
                                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>

                            <p className={styles.disclaimer}>
                                By submitting this form, you agree to our terms and conditions. All offers are non-binding until a formal agreement is reached.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
