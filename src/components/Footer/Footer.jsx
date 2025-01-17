import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="bg-footer px-8 py-20 text-center text-accent">
      <p className="m-0 text-xl font-black">wojtasjg@icloud.com</p>
      <ul className="mt-4 flex justify-center gap-4">
        <li className="inline-block">
          <a
            href="https://github.com/BigWojtek7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
