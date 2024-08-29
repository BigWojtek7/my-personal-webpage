import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const toggleMenu = () => {
    document.body.classList.toggle('navOpen');
  };
  const closeMenu = () => {
    document.body.classList.remove('navOpen');
  };
  return (
    <header className={styles.header} id="home">
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
            <Link to="/#home" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/#services"
              className={styles.navLink}
              onClick={closeMenu}
            >
              My services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/#about" className={styles.navLink} onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/#work" className={styles.navLink} onClick={closeMenu}>
              My work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
