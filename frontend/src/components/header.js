import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Burger, BurgerLine, Head, Logo, NavLinks, NavWrapper, StyledLink } from '../styles/HeaderStyles.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      active: false,
      navBarActiveClass: '',
      toggleClass: 'un-toggle',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.reportWindowSize);
  }

  // checks if navigation is active. If active, will disable scrolling
  componentDidUpdate() {
    const { active } = this.state;
    const { setBodyPositions } = this.props;

    if (active) {
      setBodyPositions('hidden', 'hidden', '100vh', 'relative');
    } else {
      setBodyPositions('', '', '', '');
    }
  }

  componentWillUnmount() {
    const { setBodyPositions } = this.props;
    window.removeEventListener('resize', this.reportWindowSize);
    setBodyPositions('', '', '', '');
  }

  // resets navigation when width is greater than tablet
  reportWindowSize = () => {
    const widthOutput = window.innerWidth;

    if (widthOutput > 959) {
      this.setState({
        active: false,
        navBarActiveClass: '',
        toggleClass: 'un-toggle',
      });
    }
  };

  toggleHamburger = () => {
    const { active } = this.state;
    // toggle the active boolean in the state
    this.setState(
      {
        active: !active,
        // navBarActiveClass: 'isActive',
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        // eslint-disable-next-line no-unused-expressions
        !active
          ? this.setState({
              navBarActiveClass: 'isActive',
              toggleClass: 'toggle',
            })
          : this.setState({
              navBarActiveClass: '',
              toggleClass: 'un-toggle',
            });
      }
    );
  };

  render() {
    const { siteTitle } = this.props;
    const { navBarActiveClass, toggleClass } = this.state;
    return (
      <Head>
        <NavWrapper>
          <Logo>
            <h4>
              <StyledLink to="/">{siteTitle}</StyledLink>
            </h4>
          </Logo>
          <NavLinks ref={this.myRef} className={`${navBarActiveClass}`}>
            <StyledLink to="/news">News</StyledLink>

            <StyledLink to="/">Music</StyledLink>

            <StyledLink to="/tour">Shows</StyledLink>

            <StyledLink to="/">Videos</StyledLink>

            <StyledLink to="/signup">Sign Up</StyledLink>

            <StyledLink to="/contact">Contact</StyledLink>
          </NavLinks>
          <Burger className={`${navBarActiveClass}`} onClick={() => this.toggleHamburger()}>
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
  setBodyPositions: PropTypes.func,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
