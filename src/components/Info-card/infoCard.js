import React from "react";
import ImageFrame from "./imageFrame";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Backward, Forward } from "./ChangePhoto";

const Author = styled.p`
  text-align: right;
  font-size: 20px;
`;
const BottomInfo = styled.div`
  background: white;
  color: black;
  margin: 3%;
  padding: 2%;
`;
const Shift = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoCard = props => {
  return (
    <div className="main">
      <h1>{props.title}</h1>
      <Shift>
        <Backward lastDate={props.lastDate}></Backward>
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
        <Forward futureDate={props.futureDate}> </Forward>
      </Shift>
      <BottomInfo>
        <h3>{props.desc}</h3>
        <Author>{props.name}</Author>
      </BottomInfo>
    </div>
  );
};
export default InfoCard;
