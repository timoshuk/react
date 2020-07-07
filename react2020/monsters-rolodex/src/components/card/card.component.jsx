import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2>{props.monster.name}</h2>
    <a href={`mailto: ${props.monster.email}`}>{props.monster.email}</a>
  </div>
);
