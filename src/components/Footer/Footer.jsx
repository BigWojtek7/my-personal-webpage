import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.email}>wojtasjg@icloud.com</p>
      <ul className={styles.list}>
        {/* <li className={styles.listItem}><a className={styles.link} href="#">Icon</a></li> */}
        <li className={styles.listItem}>
          <a
            className={styles.link}
            href="https://github.com/BigWojtek7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
        {/* <li className={styles.listItem}><a className={styles.link} href="#">Icon</a></li> */}
      </ul>
    </footer>
  );
}
export default Footer;
