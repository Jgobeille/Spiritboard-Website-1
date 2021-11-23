import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

import Layout from "../components/layout";
import PopUp from "../components/popUp.js";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

import {
  HeaderVideo,
  HeaderVideoButtonsContainer,
  HeaderVideoButton,
  ComingSoon,
} from "../styles/HomeStyles.js";
import {
  HeaderWrapper,
  OverlayText,
  SectionHeader,
} from "../styles/Globals.js";

const IndexPage = () => {
  const [seen, setSeen] = useState(false);
  const [isCookie, setCookie] = useState(null);

  const setBodyPositions = useCallback((x, y, height, position) => {
    document.body.style.overflowX = x;
    document.body.style.overflowY = y;
    document.body.style.height = height;
    document.body.style.position = position;
  }, []);

  const togglePop = () => {
    setSeen(false);

    setBodyPositions("", "", "", "");
  };

  // Show popup after 3 seconds
  useEffect(() => {
    setCookie(Cookies.get("disablePopup"));
    const timeout = setTimeout(() => {
      // If no cookie, show popup
      if (!isCookie) {
        setSeen(true);
        // Set cookie
        Cookies.set("disablePopup", "disablePopup", { expires: 1 });
        setCookie(Cookies.get("disablePopup"));
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isCookie]);

  // disable scrolling when pop up appears
  useEffect(() => {
    if (seen === true) {
      setBodyPositions("hidden", "hidden", "100vh", "relative");
    }
  }, [seen, setBodyPositions]);

  const videoSource = "https://spiritboard.s3.amazonaws.com/cut3.mp4";

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
          <img
            src={
              "https://spirit-board-site-images.s3.us-east-2.amazonaws.com/WHTtextpng.png"
            }
            alt="spiritboard text logo"
          />
        </OverlayText>
        <HeaderVideoButtonsContainer>
          <HeaderVideoButton href="https://www.youtube.com/channel/UC9UuWiG83P_j36awgVss--w">
            WATCH
          </HeaderVideoButton>
          <HeaderVideoButton href="https://linktr.ee/SpiritBoardBand?fbclid=IwAR1nPa1VCkzCMHDSh7Yb6FqfgaJssMga1NnBCe00pnIsKqWGyT7pjthDeXg">
            LISTEN
          </HeaderVideoButton>
        </HeaderVideoButtonsContainer>
      </HeaderWrapper>

      <SectionHeader>MERCH</SectionHeader>
      <ComingSoon>COMING SOON</ComingSoon>

      <Carousel />
    </Layout>
  );
};

export default IndexPage;
