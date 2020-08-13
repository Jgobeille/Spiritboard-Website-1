import styled from 'styled-components';

import { theme } from './Globals.js';

export const FooterSection = styled.footer`
  background-color: ${theme.headerPurple};
  /* position: absolute; */
  width: 100%;
  padding: 50px 50px;
`;

export const SocialIconsWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
  margin: 0 0 25px 0;
`;
export const PrivacyPolicyWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${theme.secondaryWhite};
  margin-bottom: 5px;
`;
