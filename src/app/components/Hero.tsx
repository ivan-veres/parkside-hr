import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <div className={styles.gradientOverlay}></div>
                <div className={styles.particles}>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                </div>
            </div>

            <nav className={styles.navbar}>
                <a href="#" className={styles.navLink}>Početna</a>
                <a href="#details" className={styles.navLink}>Istraži</a>
                <a href="#contact" className={styles.navLink}>Kontakt</a>
            </nav>

            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Otvoreno Svaki Dan
                    </div>

                    <h1 className={styles.domainName}>
                        Park Side
                    </h1>

                    <p className={styles.tagline}>
                        Gdje se priroda susreće s zajednicom. Otkrijte svoj savršeni bijeg u srcu grada.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Priroda</span>
                        </div>
                        <div className={styles.feature}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Zajednica</span>
                        </div>
                        <div className={styles.feature}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Mir</span>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <a href="#contact" className={styles.primaryButton}>
                            Pridružite nam se
                            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a href="#details" className={styles.secondaryButton}>
                            Istraži
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
