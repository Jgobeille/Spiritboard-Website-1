import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}

`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 15;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);

  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
`;
