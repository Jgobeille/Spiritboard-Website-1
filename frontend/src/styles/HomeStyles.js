import styled from 'styled-components';

import { theme } from './Globals.js';

export const HeaderVideo = styled.video`
  z-index: 1;
  top: 0;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.3);
  height: 92vh;
  width: 100%;
  object-fit: fill;
  padding: 0;
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
