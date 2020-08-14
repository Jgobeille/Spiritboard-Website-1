import styled from 'styled-components';

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

export const SocialIcons = styled.div`
  z-index: 2;
`;

/**
 *
 * Tour Section
 *
 */

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

/**
 *
 * News Section
 *
 */

export const Article = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ArticleDate = styled.p`
  color: ${theme.secondaryWhite};
  font-weight: 700;
  padding-top: 50px;
`;

export const ArticleTitle = styled.h2`
  color: ${theme.secondaryWhite};
  font-weight: 700;
`;

export const ArticleContent = styled.p`
  color: ${theme.secondaryWhite};
  align-self: end;
`;

export const ArticleAuthor = styled.p`
  color: ${theme.secondaryWhite};
  font-weight: 700;
  padding-bottom: 50px;
  align-self: end;
`;