import React from "react";

const ImageFrame = props => {
  return (
    <>
      <img alt="" className="image-box" src={props.photos} />
    </>
  );
};

export default ImageFrame;
