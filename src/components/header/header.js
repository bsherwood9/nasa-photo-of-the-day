import React from "react";
import styled from "styled-components";

const Head = styled.div`
  width: 75%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`;

const Glogo = styled.img`
  padding: 10px;
  width: 400px;
  height: auto;
`;

const Div = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  color: black;
  whitespace: nowrap;
`;

const H3 = styled.h3`
  padding: 0 5%;
`;

const Header = props => {
  return (
    <Head>
      <Glogo
        alt="Nasa logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/800px-NASA_Worm_logo.svg.png"
      />
      <Div>
        <H3>Astronomy Photo of the Day</H3>
        {props.date ? <p>{props.date}</p> : null}
      </Div>
    </Head>
  );
};

export default Header;
