import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/db.json";

export const Details = () => {
  const params = useParams();
  const id = params.id;

  const [achievement, setAchievement] = useState({});

  useEffect(() => {
    const achievementDetails = data.achievements.filter(
      (achievement) => achievement.id == id
    );
    setAchievement(achievementDetails[0]);
  }, []);

  return (
    <div>
      <h1>{achievement.title}</h1>
      <div>
        <img
          src={`../../assets/images/${achievement.img}`}
          alt={achievement.title}
        />
        <p>{achievement.long_desc}</p>
      </div>
    </div>
  );
};
