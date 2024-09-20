import { Link } from "react-router-dom";
import "./card.css";

function Card({ id, img, title, desc }) {
  return (
    <Link to={`/achievements/${id}`}>
      <figure>
        <img src={`assets/images/${img}`} alt={title} className="card-img" />
        <figcaption>
          <h2>{title}</h2>
          <p>{desc}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

export default Card;
