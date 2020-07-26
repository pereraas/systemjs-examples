import React from "react";
import ReactDOM from "react-dom";
import Bounce from "react-reveal/Bounce";
import Spinner from "./Spinner";
import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f4f4f4;
`;

ReactDOM.render(
  <SpinnerContainer>
    <Bounce left>
      <Spinner />
    </Bounce>
  </SpinnerContainer>,
  document.getElementById("react-root")
);
