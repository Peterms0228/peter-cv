import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>
            Let's build something<br />
            <em>great together.</em>
          </h2>
          <p className={styles.ctaText}>
            Open to full-time opportunities and interesting projects.
          </p>
          <a href="https://wa.me/60162158473" target="_blank" className={styles.ctaBtn}>
            Say Hello →
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Chua Meng Sin (Peter). Built with React & Vite.
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/Peterms0228"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/meng-sin-chua-648812281"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a href="mailto:chuams0228@gmail.com" className={styles.link}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
