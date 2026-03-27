import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Java', 'SQL', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    icon: '⚙',
    skills: ['Spring Boot', 'Struts', 'J2EE', 'Thymeleaf'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    skills: ['React', 'JSP', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    icon: '◈',
    skills: ['MySQL', 'Oracle', 'Redis'],
  },
  {
    category: 'Architecture',
    icon: '⬡',
    skills: ['Microservices', 'RESTful APIs', 'SOAP APIs'],
  },
  {
    category: 'Tools & Messaging',
    icon: '▷',
    skills: ['Git', 'SVN', 'JMeter', 'Postman', 'RabbitMQ', 'IntelliJ IDEA'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>02 — Skills</span>
          <h2 className={styles.heading}>Technical Arsenal</h2>
        </div>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <span className={styles.category}>{group.category}</span>
              </div>
              <div className={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
