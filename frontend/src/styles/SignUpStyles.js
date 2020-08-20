import styled from 'styled-components';

import { Input } from './ContactStyles';

import { theme, maxWidthDevice } from './Globals';

export const SignUpInput = styled(Input)`
  margin-right: 30px;
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and ${maxWidthDevice.mobileL} {
    display: block;
  }
`;

export const Message = styled.p`
  color: ${theme.accentPinkRed};
  text-align: left;
  font-family: ${theme.primaryFont};
  letter-spacing: 2px;

  @media screen and ${maxWidthDevice.mobileL} {
    letter-spacing: 0px;
  }
`;
