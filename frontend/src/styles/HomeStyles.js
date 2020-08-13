import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import { maxWidthDevice, minWidthDevice, theme } from './Globals.js';

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
  margin-bottom: 40px;
`;

export const SectionHeader = styled.h1`
  color: ${theme.accentPinkRed};
  letter-spacing: 3px;
  text-decoration: underline;
  /* top | right | bottom | left */
  margin: 20px 0 20px 0;
`;

export const SocialIcons = styled.div`
  z-index: 2;
`;
