import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.email}>wojtasjg@gmail.com</p>
      <ul className="socialLinks">
        <li>Icon</li>
        <li>Icon</li>
        <li>Icon</li>
      </ul>
    </footer>
  );
}
export default Footer;
