
import styles from './Header.module.css';

function Header() {



  const toggleMenu = () => {
    document.body.classList.toggle('navOpen');
  }
  const closeMenu = () => {
    document.body.classList.remove('navOpen')
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>&lt;BigWojtek7&gt;</p>
      </div>
      <button
        className={styles.btnToggle}
        onClick={toggleMenu}
        aria-label="toggle navigation"
      >
        <span className={styles.hamburger}></span>
      </button>
      <nav className={`${styles.nav}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLink} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className={styles.navLink} onClick={closeMenu}>
              My services
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#work" className={styles.navLink} onClick={closeMenu}>
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
