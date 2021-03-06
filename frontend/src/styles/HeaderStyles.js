import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import { maxWidthDevice, theme } from './Globals.js';

export const Burger = styled.div`
  cursor: pointer;
  z-index: 10;

  @media screen and ${maxWidthDevice.tablet} {
    display: block;
  }

  @media screen and (min-width: 780px) {
    display: none;
  }
`;

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${theme.secondaryWhite};
  margin: 5px;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;

  &:hover {
    background-color: ${theme.highlightYellow};
  }
`;

export const Head = styled.header`
  background: ${theme.headerPurple};
`;

export const Logo = styled.div`
  color: ${theme.secondaryWhite};
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 24px;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${theme.highlightYellow};
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 55%;
  margin-block-end: 0 !important;
  margin-bottom: 1.45em;

  @media screen and ${maxWidthDevice.tablet} {
    z-index: 5;
    position: absolute;
    right: 0px;
    height: 93vh;
    top: 7vh;
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
    height: 92vh;
    top: 8vh;
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
  position: relative;
  max-width: 1250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledLink = styled(props => <Link {...props} />)`
  font-family: ${theme.primaryFont};
  letter-spacing: 2px;
  color: ${theme.secondaryWhite};
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${theme.highlightYellow};
  }
`;
