import styles from './Projects.module.css';

const projects = [
  {
    num: '01',
    title: 'Microservices-Based Backend System',
    desc: 'Designed and developed a modular backend system using Spring Boot microservices architecture. Implemented inter-service communication with RabbitMQ for reliable async messaging, improving overall system scalability and maintainability.',
    tags: ['Spring Boot', 'RabbitMQ', 'Microservices', 'MySQL', 'REST APIs'],
    highlight: 'Scalability & Decoupling',
  },
  {
    num: '02',
    title: 'Enterprise Legacy System Enhancement',
    desc: 'Supported and enhanced a Struts-based enterprise application in a production environment. Integrated SOAP APIs with external systems and systematically resolved recurring production issues, significantly improving system stability.',
    tags: ['Struts', 'J2EE', 'SOAP APIs', 'Oracle', 'JSP'],
    highlight: 'System Stability',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>04 — Projects</span>
          <h2 className={styles.heading}>Project Highlights</h2>
        </div>
        <div className={styles.list}>
          {projects.map((p) => (
            <div key={p.num} className={styles.card}>
              <div className={styles.cardLeft}>
                <span className={styles.num}>{p.num}</span>
                <span className={styles.highlightBadge}>{p.highlight}</span>
              </div>
              <div className={styles.cardRight}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
