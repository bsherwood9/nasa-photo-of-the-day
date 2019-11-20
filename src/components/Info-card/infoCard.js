import React from "react";
import ImageFrame from "./imageFrame";
import ReactPlayer from "react-player";

const InfoCard = props => {
  return (
    <div className="main">
      <h1>Title: {props.title}</h1>
      {props.type === "video" ? (
        <ReactPlayer
          width="800px"
          height="600px"
          controls="true"
          url={props.url}
        />
      ) : (
        <ImageFrame photos={props.photo} />
      )}
      <h2>{props.desc}</h2>
      <p>{props.name}</p>
    </div>
  );
};
export default InfoCard;
