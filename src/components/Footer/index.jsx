import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '@styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer footer__flex">
      <span>
        <FontAwesomeIcon className="icon__padded" icon={faGithub} />
        <a href="https://github.com/thewhitehaven04">thewhitehaven04</a>
      </span>
      <span>Built for The Odin Project, 2023</span>
    </footer>
  );
}
