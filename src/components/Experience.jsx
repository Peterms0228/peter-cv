import { useState } from 'react';
import styles from './Experience.module.css';

const jobs = [
  {
    company: 'Hitachi eBworx',
    role: 'Application Engineer',
    period: 'May 2025 – Present',
    type: 'Full-time',
    location: 'Malaysia',
    points: [
      'Maintain and enhance enterprise applications using Struts (MVC), JSP, and J2EE',
      'Develop and integrate SOAP APIs for external system communication',
      'Work with Oracle databases, including stored procedures and performance tuning',
      'Troubleshoot production issues and ensure system stability in legacy environments',
      'Collaborate with cross-functional teams to deliver system enhancements',
    ],
    stack: ['Struts', 'JSP', 'J2EE', 'Oracle', 'SOAP'],
  },
  {
    company: 'ATOZ Software Tech',
    role: 'Junior Software Engineer',
    period: 'Mar 2024 – May 2025',
    type: 'Full-time',
    location: 'Malaysia',
    points: [
      'Developed backend services using Spring Boot and microservices architecture',
      'Built and consumed RESTful APIs for scalable system integration',
      'Implemented RabbitMQ for asynchronous communication between services',
      'Optimized database queries in MySQL and Redis, improving system performance',
      'Conducted performance testing using JMeter to identify bottlenecks',
      'Collaborated with frontend team for end-to-end feature delivery',
    ],
    stack: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'JMeter', 'REST APIs'],
  },
  {
    company: 'Syscatech Sdn Bhd',
    role: 'Software Engineer Intern',
    period: 'Feb 2023 – Jul 2023',
    type: 'Internship',
    location: 'Malaysia',
    points: [
      'Developed web application features using Java, Thymeleaf, HTML, and JavaScript',
      'Integrated backend services with MySQL database',
      'Used Git for version control and team collaboration',
      'Assisted in debugging and testing to ensure application reliability',
    ],
    stack: ['Java', 'Thymeleaf', 'MySQL', 'Git', 'HTML', 'JavaScript'],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>03 — Experience</span>
          <h2 className={styles.heading}>Work History</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.tabs}>
            {jobs.map((job, i) => (
              <button
                key={job.company}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabCompany}>{job.company}</span>
                <span className={styles.tabPeriod}>{job.period}</span>
              </button>
            ))}
          </div>

          <div className={styles.content}>
            {(() => {
              const job = jobs[active];
              return (
                <div className={styles.job}>
                  <div className={styles.jobTop}>
                    <div>
                      <h3 className={styles.role}>{job.role}</h3>
                      <p className={styles.meta}>
                        <span>{job.company}</span>
                        <span className={styles.sep}>·</span>
                        <span>{job.location}</span>
                        <span className={styles.sep}>·</span>
                        <span className={styles.type}>{job.type}</span>
                      </p>
                    </div>
                    <span className={styles.period}>{job.period}</span>
                  </div>

                  <ul className={styles.points}>
                    {job.points.map((p, i) => (
                      <li key={i} className={styles.point}>
                        <span className={styles.bullet}>▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.stack}>
                    {job.stack.map((t) => (
                      <span key={t} className={styles.stackTag}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
