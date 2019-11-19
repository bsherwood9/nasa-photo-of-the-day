import React from "react";

const Header = props => {
  return (
    <>
      <h1>NASA</h1>
      <h3>Astronomy Photo of the Day</h3>
      {props.date ? <p>{props.date}</p> : null}
    </>
  );
};

export default Header;
