import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.email}>wojtasjg@gmail.com</p>
      <ul className={styles.list}>
        <li className={styles.listItem}><a className={styles.link} href="#">Icon</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#">Icon</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#">Icon</a></li>
      </ul>
    </footer>
  );
}
export default Footer;
