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

            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        For Sale
                    </div>

                    <h1 className={styles.domainName}>
                        Parkside<span className={styles.tld}>.hr</span>
                    </h1>

                    <p className={styles.tagline}>
                        A premium Croatian domain for LIDL&apos;s PARKSIDE brand - tools, DIY, and home improvement
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Memorable</span>
                        </div>
                        <div className={styles.feature}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Professional</span>
                        </div>
                        <div className={styles.feature}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>SEO-Friendly</span>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <a href="#contact" className={styles.primaryButton}>
                            Make an Offer
                            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#details" className={styles.secondaryButton}>
                            Learn More
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
