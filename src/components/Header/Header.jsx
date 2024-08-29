import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>&lt;BigWojtek7&gt;</p>
      </div>
      <button
        className={styles.btnToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="toggle navigation"
      >
        <span className={styles.hamburger}></span>
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.navVisible : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className={styles.navLink}>
              My services
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>
              About Me
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#work" className={styles.navLink}>
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
