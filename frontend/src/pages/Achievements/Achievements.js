import React from "react";
import Card from "../../components/card/card";
import data from "../../data/db.json";
import "./achievements.css";

export const Achievements = () => {
  console.log(data.achievements);
  return (
    <div>
      <h1>Mes réalisations</h1>
      <div className="card-container">
        {data.achievements.map((achievement) => (
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
