import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <p>&lt;BigWojtek7&gt;</p>
      </div>
      <button className={styles.btnToggle}>#</button>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home" className="navLink">
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className="navLink">
              My services
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className="navLink">
              About Me
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#work" className="navLink">
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
