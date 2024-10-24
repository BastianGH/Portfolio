import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

function Card({ id, img, title, desc, github, link }) {
  return (
    <Link to={`${id}`}>
      <figure>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/poster/${img}`}
          alt={title}
          className="card-img"
        />
        <figcaption>
          <div className="card-title">
            <h2>{title}</h2>
            <div className="card-links">
              {github !== "" ? <FontAwesomeIcon icon={faGithub} /> : ""}
              {link !== "" ? <FontAwesomeIcon icon={faGlobe} /> : ""}
            </div>
          </div>
          <p className="card-p">{desc}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

export default Card;
