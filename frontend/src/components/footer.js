import React from 'react';
import { Link } from 'gatsby';

import SpotifyLogo from './svgs/spotify';
import FacebookLogo from './svgs/facebook';
import InstagramLogo from './svgs/instagram';
import TwitterLogo from './svgs/twitter';

import { Wrapper } from '../styles/Globals.js';

import { StyledLink } from '../styles/HeaderStyles.js';

import { FooterSection, SocialIconsWrapper, PrivacyPolicyWrapper, Text } from '../styles/FooterStyles.js';

const Footer = () => (
  <FooterSection>
    <Wrapper>
      <SocialIconsWrapper>
        <Link to="/">
          <SpotifyLogo footerLogo id="footer-spotify" />
        </Link>
        <Link to="/">
          <FacebookLogo footerLogo id="footer-facebook" />
        </Link>
        <Link to="/">
          <InstagramLogo footerLogo id="footer-instagram" />
        </Link>
        <Link to="/">
          <TwitterLogo footerLogo id="footer-twitter" />
        </Link>
      </SocialIconsWrapper>
      <Text>© Spiritboard 2020</Text>
      <PrivacyPolicyWrapper>
        <StyledLink to="/privacy" target="_blank">
          privacy
        </StyledLink>{' '}
        |
        <StyledLink to="/terms" target="_blank">
          terms
        </StyledLink>
      </PrivacyPolicyWrapper>
    </Wrapper>
  </FooterSection>
);

export default Footer;
