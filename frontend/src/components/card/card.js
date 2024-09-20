import React from "react";
import { Link } from "react-router-dom";

function Card({ id, img, title, desc }) {
  return (
    <div>
      <Link to={`/achievements/${id}`}>
        <figure>
          <img src={`assets/images/${img}`} alt={title} />
          <figcaption>
            <h2>{title} </h2>
            <p>{desc}</p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default Card;
