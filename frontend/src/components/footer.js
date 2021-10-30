import React from "react";
import { Link } from "gatsby";

import SpotifyLogo from "./svgs/spotify";
import FacebookLogo from "./svgs/facebook";
import InstagramLogo from "./svgs/instagram";
import TwitterLogo from "./svgs/twitter";

import { theme, Wrapper } from "../styles/Globals.js";

import { StyledLink } from "../styles/HeaderStyles.js";
import SignUp from "./signUp";

import {
  FooterSection,
  SocialIconsWrapper,
  PrivacyPolicyWrapper,
  Text,
} from "../styles/FooterStyles.js";

const Footer = () => (
  <FooterSection>
    <Wrapper>
      <Text>Sign up to get updates on new merch and upcoming shows!</Text>
      <SignUp />

      <SocialIconsWrapper>
        <Link to="/">
          <SpotifyLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-spotify"
          />
        </Link>
        <Link to="/">
          <FacebookLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-facebook"
          />
        </Link>
        <Link to="/">
          <InstagramLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-instagram"
          />
        </Link>
        <Link to="/">
          <TwitterLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-twitter"
          />
        </Link>
      </SocialIconsWrapper>
      <Text>© Spirit Board 2020</Text>
      <PrivacyPolicyWrapper>
        <StyledLink to="/privacy" target="_blank">
          privacy
        </StyledLink>{" "}
        |
        <StyledLink to="/terms" target="_blank">
          terms
        </StyledLink>
      </PrivacyPolicyWrapper>
    </Wrapper>
  </FooterSection>
);

export default Footer;
