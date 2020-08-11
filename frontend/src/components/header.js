/* eslint-disable import/no-duplicates */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

// Media Queries

/* 
  Learned how to set up media Queries here:
  https://jsramblings.com/how-to-use-media-queries-with-styled-components/
 */

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

// const minWidthDevice = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   mobileL: `(min-width: ${size.mobileL})`,
//   tablet: `(min-width: ${size.tablet})`,
//   laptop: `(min-width: ${size.laptop})`,
//   laptopL: `(min-width: ${size.laptopL})`,
//   desktop: `(min-width: ${size.desktop})`,
//   desktopL: `(min-width: ${size.desktop})`,
// };

const maxWidthDevice = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const NavWrapper = styled.nav`
  margin: 0 auto;
  max-width: 1250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  padding-top: 20px;
`;

const Head = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Logo = styled.div`
  color: white;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 24px;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media screen and ${maxWidthDevice.tablet} {
    position: absolute;
    right: 0px;
    height: 100%;
    top: 9vh;
    background: rebeccapurple;
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

const navLinkFade = keyframes`
    from {
    opacity 0;
    transform: translateX(50px);
  }

  to {
    opacity 1;
    transform: translateX(0px);
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;

  ${'' /* @media screen and ${maxWidthDevice.tablet} {
    opacity: 0;
  } */}
`;

const Burger = styled.div`
  margin-bottom: 1.45rem;
  cursor: pointer;
  @media screen and ${maxWidthDevice.tablet} {
    display: block;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
`;

// different lines in burger which will be animated later
// const BurgerLine1 = BurgerLine;
// const BurgerLine2 = BurgerLine;
// const BurgerLine3 = BurgerLine;

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      active: false,
      navBarActiveClass: '',
      toggleClass: '',
    };
  }

  toggleHamburger = () => {
    const { active } = this.state;
    // toggle the active boolean in the state
    this.setState({
      active: !active,
    });
    // after state has been updated,

    // set the class in state for the navbar accordingly
    if (active) {
      this.setState({
        navBarActiveClass: 'isActive',
        toggleClass: 'toggle',
      });
    } else {
      this.setState(prevState => ({
        navBarActiveClass: !prevState.navBarActiveClass,
        toggleClass: 'un-toggle',
      }));
    }
  };

  // Work in Progress

  // animateFadeIn = () => {
  //   /*
  //   steps:
  //   gather up all the styled links

  //   */
  //   const navLinks = [...this.myRef.current.children];

  //   navLinks.forEach((link, i) => {
  //     link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7}`;
  //   });
  // };

  render() {
    const { siteTitle } = this.props;
    const { navBarActiveClass, toggleClass } = this.state;
    return (
      <Head>
        <NavWrapper>
          <Logo>
            <h4>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h4>
          </Logo>
          <NavLinks ref={this.myRef} className={`${navBarActiveClass}`}>
            <StyledLink to="/">News</StyledLink>

            <StyledLink to="/">Music</StyledLink>

            <StyledLink to="/">Shows</StyledLink>

            <StyledLink to="/">Videos</StyledLink>

            <StyledLink to="/">Sign Up</StyledLink>

            <StyledLink to="/">Contact</StyledLink>
          </NavLinks>
          <Burger onClick={() => this.toggleHamburger()}>
            <BurgerLine className={`${toggleClass} line1`} />
            <BurgerLine className={`${toggleClass} line2`} />
            <BurgerLine className={`${toggleClass} line3`} />
          </Burger>
        </NavWrapper>
      </Head>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
