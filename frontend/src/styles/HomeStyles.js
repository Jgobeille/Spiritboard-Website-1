import styled from "styled-components";

import { theme, maxWidthDevice } from "./Globals.js";

export const HeaderVideo = styled.video`
  z-index: 1;
  top: 0;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;
  object-fit: cover;
  padding: 0;
`;

export const headerVideoImage = styled.img``;

export const HeaderVideoButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 2;
  bottom: 2vw;

  @media screen and ${maxWidthDevice.mobileL} {
    flex-direction: column;
  }
`;
export const HeaderVideoButton = styled.a`
  background: rgba(0, 0, 0, 0.5);
  margin-right: 2rem;
  color: ${theme.secondaryWhite};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 2em;
  border: 2px solid ${theme.secondaryWhite};
  border-radius: 3px;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;
  cursor: pointer;

  &:hover {
    color: ${theme.accentPinkRed};
    border: 2px solid ${theme.accentPinkRed};
  }

  @media screen and ${maxWidthDevice.mobileL} {
    margin-right: 1em;
  }
`;

export const H1 = styled.h1`
  z-index: 2;
  margin-bottom: 60px;
  font-family: ${theme.primaryFont};
  font-size: 1.9em;
  letter-spacing: 2px;
`;

export const SocialIcons = styled.div`
  z-index: 2;
`;

export const Text = styled.p`
  color: ${theme.secondaryWhite};
  margin-bottom: 5px;
`;

export const ComingSoon = styled.h3`
  text-align: center;
  color: ${theme.secondaryWhite};
  size: 2rem;
`;
