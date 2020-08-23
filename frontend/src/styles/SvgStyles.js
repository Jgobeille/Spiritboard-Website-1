import styled from 'styled-components';

import { theme } from './Globals';

export const Svg = styled.svg``;

export const Path = styled.path`
  fill: ${props => props.fill || 'black'};
`;

export const Text = styled.text`
  fill: ${theme.secondaryWhite};
`;
