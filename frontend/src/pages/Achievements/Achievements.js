import { useState } from "react";
import Card from "../../components/card/card";
import data from "../../data/db.json";
import "./achievements.css";

export const Achievements = () => {
  const [achievements, setAchievements] = useState(data.achievements);

  function filter(e) {
    if (e.target.value == "") {
      setAchievements(data.achievements);
    } else {
      const filteredArray = data.achievements.filter(
        (achievement) => achievement.type == e.target.value
      );
      setAchievements(filteredArray);
    }
  }

  return (
    <div>
      <div className="title-div">
        <h1>Mes réalisations</h1>
        <div>
          <label for="project-select">Filter par : </label>
          <select
            name="projects"
            id="project-select"
            onChange={(e) => filter(e)}
          >
            <option value="">Tous</option>
            <option value="professional">Projets Professionnels</option>
            <option value="education">Projets de Formations</option>
            <option value="personal">Projets Personnels</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            id={achievement.id}
            img={achievement.img}
            title={achievement.title}
            desc={achievement.short_desc}
          />
        ))}
      </div>
    </div>
  );
};
