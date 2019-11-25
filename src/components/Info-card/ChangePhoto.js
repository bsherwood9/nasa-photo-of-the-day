import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
const Button = styled.button`
  border-radius: 50%;
  color: white;
  background: black;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background: white;
    color: black;
  }
`;

export const Backward = props => {
  return (
    <Button onClick={props.lastDate}>
      <FontAwesomeIcon icon={faAngleDoubleLeft} size="4x" />
    </Button>
  );
};

export const Forward = props => {
  return (
    <Button onClick={props.futureDate}>
      <FontAwesomeIcon icon={faAngleDoubleRight} size="4x" />
    </Button>
  );
};
