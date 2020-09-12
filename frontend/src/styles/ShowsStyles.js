import styled from 'styled-components';

import { maxWidthDevice, theme } from './Globals.js';

/**
 *
 * Tour Section
 *
 */

export const ATag = styled.a`
  color: ${theme.secondaryWhite};
  text-decoration: none;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${theme.accentPinkRed};
  }
`;

export const Text = styled.p`
  color: ${theme.secondaryWhite};
  margin-bottom: 5px;

  @media screen and ${maxWidthDevice.tablet} {
    text-align: center;
  }
`;

export const ShowDescription = styled.div`
  width: 65%;
`;

export const ShowRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 14px 10px;

  @media screen and ${maxWidthDevice.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowsTable = styled.div`
  width: 100%;
`;

export const ShowTickets = styled.div`
  display: flex;
  width: 35%;
  justify-content: center;
  align-items: center;
`;
