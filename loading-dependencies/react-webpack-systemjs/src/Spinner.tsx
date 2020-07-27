import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid coral;
  border-right: 2px solid orange;
  border-bottom: 2px solid coral;
  border-left: 2px solid orange;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Spinner;