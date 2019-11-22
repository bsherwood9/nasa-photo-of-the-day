import React from "react";
import styled from "styled-components";

const MainImage = styled.img`
  display: inline-block;
  max-width: 800px;

  height: auto;
`;

const ImageFrame = props => {
  return (
    <>
      <MainImage alt="" src={props.photos} />
    </>
  );
};

export default ImageFrame;
