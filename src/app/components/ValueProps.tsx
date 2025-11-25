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
            title: "Zelene Površine",
            description: "Uronite u bujno zelenilo i prekrasno uređene vrtove savršene za opuštanje i piknike."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Događanja u Zajednici",
            description: "Pridružite se našoj živahnoj zajednici na tjednim događanjima, radionicama i okupljanjima u srcu parka."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Svježi Zrak",
            description: "Pobjegnite od gradskog smoga i udišite svjež, čist zrak koji pruža naša velika krošnja drveća."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Za Cijelu Obitelj",
            description: "Sigurna igrališta za djecu i zanimljive aktivnosti u kojima cijela obitelj može uživati zajedno."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            title: "Opuštanje",
            description: "Pronađite svoj zen u našim tihim zonama, savršenim za meditaciju, čitanje ili jednostavno opuštanje."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Aktivan Život",
            description: "Staze za trčanje, sprave za vježbanje na otvorenom i mjesta za jogu kako biste ostali u pokretu i zdravi."
        }
    ]

    return (
        <section id="details" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Značajke Parka</h2>
                    <p className={styles.subtitle}>
                        Doživite najbolje od prirode i zajednice na jednom mjestu.
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
                        <div className={styles.statValue}>100%</div>
                        <div className={styles.statLabel}>Priroda</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>24/7</div>
                        <div className={styles.statLabel}>Otvoreno</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>Besplatan</div>
                        <div className={styles.statLabel}>Ulaz</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>50+</div>
                        <div className={styles.statLabel}>Aktivnosti</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
