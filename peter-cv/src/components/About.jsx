import styles from './About.module.css';

const stats = [
  { val: '2+', label: 'Years Experience' },
  { val: '3', label: 'Companies' },
  { val: '10+', label: 'Technologies' },
  { val: '∞', label: 'Curiosity' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>01 — About</span>
          <h2 className={styles.heading}>Who I Am</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a Software Engineer based in Selangor, Malaysia, with a passion for building
              reliable backend systems. I thrive at the intersection of modern microservices
              architecture and battle-tested legacy systems — bridging the gap so teams can
              move fast without breaking things.
            </p>
            <p>
              My experience spans from greenfield Spring Boot microservices at ATOZ Software Tech
              to maintaining mission-critical enterprise applications at Hitachi eBworx. I believe
              good software is invisible — it just works.
            </p>
            <p>
              When I'm not optimising database queries or untangling SOAP APIs, I'm exploring
              new tools and patterns that make backend systems more resilient and maintainable.
            </p>
            <div className={styles.contact}>
              <a href="mailto:chuams0228@gmail.com" className={styles.contactItem}>
                <EmailIcon /> chuams0228@gmail.com
              </a>
              <a href="https://wa.me/60162158473" className={styles.contactItem}>
                <PhoneIcon /> +60 16 215 8473
              </a>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
