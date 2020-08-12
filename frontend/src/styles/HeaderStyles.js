import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import { maxWidthDevice, minWidthDevice, theme } from './Globals.js';

export const Burger = styled.div`
  margin-bottom: 1.45rem;
  cursor: pointer;
  @media screen and ${maxWidthDevice.tablet} {
    display: block;
  }

  @media screen and ${minWidthDevice.tablet} {
    display: none;
  }
`;

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${theme.secondaryWhite};
  margin: 5px;

  &:hover {
    background-color: ${theme.highlightYellow};
  }
`;

export const Head = styled.header`
  background: ${theme.headerPurple};
  margin-bottom: 1.45rem;
`;

export const Logo = styled.div`
  color: ${theme.secondaryWhite};
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 24px;

  &:hover {
    color: ${theme.highlightYellow};
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media screen and ${maxWidthDevice.tablet} {
    position: fixed;
    right: 0px;
    height: 90.9vh;
    top: 9vh;
    background: ${theme.headerPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  @media screen and ${maxWidthDevice.mobileL} {
    width: 100%;
  }
`;

// Keyframe

export const navLinkFade = keyframes`
      from {
      opacity 0;
      transform: translateX(50px);
    }

    to {
      opacity 1;
      transform: translateX(0px);
    }
  `;

export const NavWrapper = styled.nav`
  margin: 0 auto;
  max-width: 1250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  padding-top: 20px;
`;

export const StyledLink = styled(props => <Link {...props} />)`
  color: ${theme.secondaryWhite};
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    color: ${theme.highlightYellow};
  }

  ${'' /* @media screen and ${maxWidthDevice.tablet} {
      opacity: 0;
    } */}
`;
