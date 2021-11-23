import styled from "styled-components";

import { Input } from "./ContactStyles";

import { theme, maxWidthDevice } from "./Globals";

export const SignUpInput = styled(Input)`
  margin-right: 30px;
  margin-bottom: 0;

  @media screen and ${maxWidthDevice.mobileL} {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  @media screen and ${maxWidthDevice.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Message = styled.p`
  color: ${theme.accentPinkRed};
  align-self: end;
  font-family: ${theme.primaryFont};
  letter-spacing: 2px;
  line-height: 30px;
  margin-bottom: 10px;

  @media screen and ${maxWidthDevice.mobileL} {
    font-size: 2rem;
    letter-spacing: 0px;
  }
`;
