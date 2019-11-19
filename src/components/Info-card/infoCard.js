import React from "react";

const InfoCard = props => {
  return (
    <div>
      <h1>Title: {props.title}</h1>
      <img className="image-box" src={props.photo} />
      <h2>{props.desc}</h2>
      <p>Author: {props.name}</p>
    </div>
  );
};
export default InfoCard;
