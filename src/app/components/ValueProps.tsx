import styles from './ValueProps.module.css'
import React from 'react'

interface Benefit {
    icon: React.ReactElement
    title: string
    description: string
}

export default function ValueProps() {
    const benefits: Benefit[] = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Perfect for LIDL PARKSIDE",
            description: "Ideal domain for LIDL's PARKSIDE brand expansion into the Croatian market. Establish your presence before the official launch."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Premium .hr Extension",
            description: "The official Croatian country code domain - essential for local market credibility and SEO in Croatia."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Brand Recognition",
            description: "PARKSIDE is a well-established LIDL brand across Europe. Secure the Croatian domain before market entry."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: "Local SEO Advantage",
            description: "Dominate Croatian search results for PARKSIDE tools, DIY equipment, and home improvement products."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Strategic Investment",
            description: "Premium country-code domains appreciate in value. This is a valuable digital asset for the Croatian market."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            ),
            title: "Market Ready",
            description: "Position yourself ahead of LIDL's Croatian expansion with the perfect domain for tools and DIY products."
        }
    ]

    return (
        <section id="details" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Parkside.hr?</h2>
                    <p className={styles.subtitle}>
                        This premium Croatian domain is perfect for LIDL&apos;s PARKSIDE brand expansion into Croatia
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.iconWrapper}>
                                {benefit.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardDescription}>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>.hr</div>
                        <div className={styles.statLabel}>Croatian Domain</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>8</div>
                        <div className={styles.statLabel}>Characters</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>LIDL</div>
                        <div className={styles.statLabel}>Brand Ready</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>100%</div>
                        <div className={styles.statLabel}>Premium</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
