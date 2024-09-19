import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <span>© 2024 Tous droits réservés</span>
      <div className="link-container">
        <a className="footer-link" href="https://github.com/BastianGH">
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/bastian-pussey-483789225/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Linkedin</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
