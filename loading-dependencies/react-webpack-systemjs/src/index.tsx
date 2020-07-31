import React from "react";
import ReactDOM from "react-dom";
import Bounce from "react-reveal/Bounce";
import Spinner from "./Spinner";
import styled from "./styled-components";
import "./styles.css";

export const SpinnerContainer = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;
  background: #f4f4f4;
`;

export const HWContainer = styled.div`
  display: block;
`;

export const HelloComponent = styled.span.attrs({
  className: "component-inner",
})``;

export const WorldComponent = styled(HelloComponent).attrs({
  className: "component-outer",
})``;

ReactDOM.render(
  <SpinnerContainer>
    <Bounce left>
      <Spinner />
    </Bounce>
    <br />
    <HWContainer>
      <HelloComponent>Hello {""}</HelloComponent>
      <WorldComponent>World</WorldComponent>
    </HWContainer>
  </SpinnerContainer>,
  document.getElementById("react-root")
);
