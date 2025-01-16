import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="bg-footer text-accent px-8 py-20 text-center">
      <p className="m-0 font-black text-xl">wojtasjg@icloud.com</p>
      <ul>
        {/* <li className={styles.listItem}><a className={styles.link} href="#">Icon</a></li> */}
        <li className={styles.listItem}>
          <a
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
