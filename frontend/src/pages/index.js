import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Cookies from 'js-cookie';

import Layout from '../components/layout';
import Music from '../components/music';
import Videos from '../components/videos';
import PopUp from '../components/popUp.js';
import SEO from '../components/seo';

import SpotifyLogo from '../components/svgs/spotify';
import FacebookLogo from '../components/svgs/facebook';
import InstagramLogo from '../components/svgs/instagram';
import TwitterLogo from '../components/svgs/twitter';

import { HeaderVideo, SocialIcons, H1, Text } from '../styles/HomeStyles.js';
import { HeaderWrapper, OverlayText, SectionHeader, theme, Wrapper } from '../styles/Globals.js';

const IndexPage = () => {
  const [seen, setSeen] = useState(false);
  const [isCookie, setCookie] = useState(null);

  const setBodyPositions = (x, y, height, position) => {
    document.body.style.overflowX = x;
    document.body.style.overflowY = y;
    document.body.style.height = height;
    document.body.style.position = position;
  };

  const togglePop = () => {
    setSeen(false);

    setBodyPositions('', '', '', '');
  };

  // Show popup after 3 seconds
  useEffect(() => {
    setCookie(Cookies.get('disablePopup'));
    const timeout = setTimeout(() => {
      // If no cookie, show popup
      if (!isCookie) {
        setSeen(true);
        // Set cookie
        Cookies.set('disablePopup', 'disablePopup', { expires: 1 });
        setCookie(Cookies.get('disablePopup'));
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isCookie]);

  // disable scrolling when pop up appears
  useEffect(() => {
    if (seen === true) {
      setBodyPositions('hidden', 'hidden', '100vh', 'relative');
    }
  }, [seen, setBodyPositions]);

  const videoSource = 'https://spiritboard.s3.amazonaws.com/Band_Stock_1.mp4';

  return (
    <Layout>
      <SEO title="Home" />
      {seen ? <PopUp toggle={togglePop} /> : null}
      <HeaderWrapper>
        <HeaderVideo loop autoPlay muted>
          <track kind="captions" />
          <source src={videoSource} type="video/mp4" />
          <source src={videoSource} type="video/ogg" />
          Your browser does not support the video tag.
        </HeaderVideo>
        <OverlayText>
          <H1>Spirit Board</H1>
          <SocialIcons>
            <Link to="/">
              <SpotifyLogo fill={`${theme.secondaryWhite}`} height="30px" width="30px" id="spotify" headerLogo />
            </Link>
            <Link to="/">
              <FacebookLogo fill={`${theme.secondaryWhite}`} height="30px" width="30px" id="facebook" headerLogo />
            </Link>
            <Link to="/">
              <InstagramLogo fill={`${theme.secondaryWhite}`} height="30px" width="30px" id="instagram" headerLogo />
            </Link>
            <Link to="/">
              <TwitterLogo fill={`${theme.secondaryWhite}`} height="30px" width="30px" id="twitter" headerLogo />
            </Link>
          </SocialIcons>
        </OverlayText>
      </HeaderWrapper>
      <SectionHeader>MERCH</SectionHeader>
    </Layout>
  );
};

export default IndexPage;
