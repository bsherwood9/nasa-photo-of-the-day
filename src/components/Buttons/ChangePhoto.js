import React from "react";

const ChangePhoto = props => {
  return (
    <button className="btn" onClick={props.changeDate}>
      Yesterday
    </button>
  );
};

export default ChangePhoto;
