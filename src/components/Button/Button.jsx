// import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
function Button({ url, isNewTab, className, children }) {
  return (
    <a
      className={`inline-block bg-accent px-6 py-2 font-extrabold text-white transition-transform duration-200 hover:scale-110 ${className}`}
      href={url}
      target={isNewTab ? '_blank' : undefined}
      rel={isNewTab ? 'noopener noreferrer' : undefined}
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
