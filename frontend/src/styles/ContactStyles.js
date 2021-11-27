import styled from "styled-components";

import { Button, theme, Wrapper, maxWidthDevice } from "./Globals";

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1rem;
  color: ${theme.secondaryWhite};
  padding: 7px 0;
  background: transparent;
  transition: border-color 1s;
  margin-bottom: 20px;

  &:focus {
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${theme.accentPinkRed},
      ${theme.lavender}
    );
    border-image-slice: 1;
  }
`;

export const TextArea = styled(Input)`
  height: 300px;
`;

export const FormWrapper = styled(Wrapper)`
  width: 50%;

  @media screen and ${maxWidthDevice.tablet} {
    width: 90%;
  }
`;

export const FormButton = styled(Button)`
  margin: 0 20px 0 0;
  padding: 0.5em 2em;

  @media screen and ${maxWidthDevice.mobileL} {
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  color: ${theme.secondaryWhite};
  margin: 20px 0 50px 0;
  font-family: ${theme.primaryFont};
  letter-spacing: 2px;
`;
