import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
function Button({ url, isNewTab, style, children }) {
  return (
    <a
      className={styles.btn}
      href={url}
      target={isNewTab ? '_blank' : undefined}
      rel={isNewTab ? 'noopener noreferrer' : undefined}
      style={style}
    >
      {children}
      {isNewTab && ' '}
      {isNewTab ? (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
      ) : null}
    </a>
  );
}
export default Button;
