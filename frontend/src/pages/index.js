import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Cookies from 'js-cookie';

import Layout from '../components/layout';
import Music from '../components/music';
import News from '../components/news';
import Shows from '../components/shows';
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

  const data = useStaticQuery(graphql`
    query {
      allStrapiPost {
        edges {
          node {
            strapiId
            title
            description
            date
            image {
              publicURL
            }
            created_by {
              firstname
              lastname
            }
          }
        }
      }
      allStrapiShow {
        edges {
          node {
            strapiId
            venuename
            date
            location
            description
            ticketsURL
          }
        }
      }
    }
  `);
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

  const lastNews = data.allStrapiPost.edges.length - 1;

  // Done with for loop instead of map to save efficiency from slicing the first item in the array
  const shows = [];
  for (let i = 1; i < data.allStrapiShow.edges.length; i += 1) {
    shows.push(
      <Shows
        date={data.allStrapiShow.edges[i].node.date}
        location={data.allStrapiShow.edges[i].node.location}
        name={data.allStrapiShow.edges[i].node.venuename}
        tickets={data.allStrapiShow.edges[i].node.ticketsURL}
        description={data.allStrapiShow.edges[i].node.description}
        key={data.allStrapiShow.edges[i].node.strapiId}
      />
    );
  }

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
      <SectionHeader>SHOWS</SectionHeader>
      {data.allStrapiShow.edges.length === 1 ? (
        <Wrapper>
          <Text>There are no shows currently scheduled</Text>
        </Wrapper>
      ) : (
        <>{shows}</>
      )}

      <SectionHeader>NEWS</SectionHeader>
      {lastNews ? (
        <News
          title={data.allStrapiPost.edges[lastNews].node.title}
          date={data.allStrapiPost.edges[lastNews].node.date}
          image={
            data.allStrapiPost.edges[lastNews].node.image ? data.allStrapiPost.edges[lastNews].node.image.publicURL : ''
          }
          description={data.allStrapiPost.edges[lastNews].node.description}
          firstName={data.allStrapiPost.edges[lastNews].node.created_by.firstname}
          lastName={data.allStrapiPost.edges[lastNews].node.created_by.lastname}
          key={data.allStrapiPost.edges[lastNews].node.strapiId}
        />
      ) : (
        <Text>There are no new updates yet</Text>
      )}
      <SectionHeader>MUSIC</SectionHeader>
      <Music />
      <Videos />
    </Layout>
  );
};

export default IndexPage;
