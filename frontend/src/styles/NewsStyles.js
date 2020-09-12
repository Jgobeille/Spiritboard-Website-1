import styled from 'styled-components';

import { theme } from './Globals.js';

/**
 *
 * News Section
 *
 */

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ArticleDate = styled.p`
  color: ${theme.secondaryWhite};
  align-self: end;
  font-weight: 700;
  padding-top: 50px;
  margin-bottom: 5px;
`;

export const ArticleTitle = styled.h2`
  color: ${theme.secondaryWhite};
  align-self: end;
  font-weight: 700;
  font-family: ${theme.primaryFont};
  letter-spacing: 2px;
  font-size: 2em;
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
