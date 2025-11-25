import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.domain}>
                        <span className={styles.domainName}>Park Side</span>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.info}>
                        <p className={styles.copyright}>
                            © {currentYear} <strong>Park Side Community</strong>. All rights reserved.
                        </p>
                        <p className={styles.tagline}>
                            Nature & Community
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
