import styles from './Education.module.css';

const education = [
  {
    degree: 'Bachelor of Software Engineering (Honours)',
    institution: 'Tunku Abdul Rahman University of Management & Technology',
    short: 'TARUMT',
    period: 'May 2021 – Jul 2023',
    icon: '◈',
  },
  {
    degree: 'Diploma in Computer Science and Mathematics',
    institution: 'Tunku Abdul Rahman University of Management & Technology',
    short: 'TARUMT',
    period: 'May 2019 – Apr 2021',
    icon: '◇',
  },
];

const extras = [
  'Strong experience in both modern (Spring Boot) and legacy (Struts/J2EE) systems',
  'Familiar with Agile development practices',
  'Good problem-solving and debugging skills in production environments',
];

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>05 — Education</span>
          <h2 className={styles.heading}>Academic Background</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.eduList}>
            {education.map((e, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{e.icon}</span>
                  <div>
                    <span className={styles.short}>{e.short}</span>
                    <span className={styles.period}>{e.period}</span>
                  </div>
                </div>
                <h3 className={styles.degree}>{e.degree}</h3>
                <p className={styles.institution}>{e.institution}</p>
              </div>
            ))}
          </div>

          <div className={styles.additional}>
            <h3 className={styles.addTitle}>Additional Strengths</h3>
            <ul className={styles.addList}>
              {extras.map((item, i) => (
                <li key={i} className={styles.addItem}>
                  <span className={styles.addBullet}>▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
