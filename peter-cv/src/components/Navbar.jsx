import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoText}>Peter</span>
        <span className={styles.logoDot}>.</span>
      </a>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setMenuOpen(false)} className={styles.link}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:chuams0228@gmail.com"
            className={styles.ctaBtn}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </li>
      </ul>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : styles.bar} />
        <span className={menuOpen ? styles.barHide : styles.bar} />
        <span className={menuOpen ? styles.barOpenR : styles.bar} />
      </button>
    </nav>
  );
}
