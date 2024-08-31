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
      <div>
        <Link className={styles.logo} to="/">
          <p>&lt;BigWojtek7&gt;</p>
        </Link>
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
              Strona główna
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/#services"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Mój warsztat
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/#about" className={styles.navLink} onClick={closeMenu}>
              O mnie
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/#work" className={styles.navLink} onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
