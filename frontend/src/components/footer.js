import React from "react";

import SpotifyLogo from "./svgs/spotify";
import FacebookLogo from "./svgs/facebook";
import InstagramLogo from "./svgs/instagram";

import { theme } from "../styles/Globals.js";

import { StyledLink } from "../styles/HeaderStyles.js";
import SignUp from "./signUp";

import {
  FooterSection,
  SocialIconsWrapper,
  PrivacyPolicyWrapper,
  Text,
  FooterLogoImage,
  FooterWrapper,
} from "../styles/FooterStyles.js";

const Footer = () => (
  <FooterSection>
    <FooterWrapper>
      <FooterLogoImage
        src="https://spirit-board-site-images.s3.us-east-2.amazonaws.com/WHTpnglogo.png"
        alt="Spiritboard Logo"
      />
      <Text>Sign up to get updates on new merch and upcoming shows!</Text>
      <SignUp />

      <SocialIconsWrapper>
        <a href="https://open.spotify.com/artist/6hDBu2nL98TrcIopXy9IGJ?si=TccfE5UeQ_WQcBymTS-K0w">
          <SpotifyLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-spotify"
          />
        </a>
        <a href="https://www.facebook.com/SpiritBoardBand">
          <FacebookLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-facebook"
          />
        </a>
        <a href="https://www.instagram.com/spiritboardband/">
          <InstagramLogo
            footerLogo
            fill={`${theme.secondaryWhite}`}
            height="30px"
            width="30px"
            footer="footer"
            id="footer-instagram"
          />
        </a>
      </SocialIconsWrapper>
      <Text>© Spirit Board 2020</Text>
      {/* <PrivacyPolicyWrapper>
        <StyledLink to="/privacy" target="_blank">
          privacy
        </StyledLink>{" "}
        |
        <StyledLink to="/terms" target="_blank">
          terms
        </StyledLink>
      </PrivacyPolicyWrapper> */}
    </FooterWrapper>
  </FooterSection>
);

export default Footer;
