import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/db.json";
import UncontrolledExample from "../../components/carousel/carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./details.css";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [achievement, setAchievement] = useState({});

  useEffect(() => {
    const achievementDetails = data.achievements.filter(
      (achievement) => achievement.id === parseInt(id)
    );
    if (achievementDetails.length < 1) navigate("/404");
    setAchievement(achievementDetails[0]);
  }, [id]);

  return (
    <div>
      <h1>{achievement.title}</h1>
      <div className="details-container">
        <UncontrolledExample images={achievement.carousel} />
        {achievement.long_desc &&
          achievement.long_desc.map((p, index) => <p key={index}>{p}</p>)}
        <div className="link-container">
          {achievement.github !== "" ? (
            <a href={achievement.github} className="link">
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </a>
          ) : (
            ""
          )}
          {achievement.link !== "" ? (
            <a href={achievement.link} className="link">
              <FontAwesomeIcon icon={faGlobe} />
              <span>Site</span>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
