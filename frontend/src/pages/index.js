import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Music from '../components/music';
import News from '../components/news';
import Tour from '../components/tour';
import Videos from '../components/videos';
import PopUp from '../components/popUp.js';
import SEO from '../components/seo';

import SpotifyLogo from '../components/svgs/spotify';
import FacebookLogo from '../components/svgs/facebook';
import InstagramLogo from '../components/svgs/instagram';
import TwitterLogo from '../components/svgs/twitter';

import { HeaderVideo, SocialIcons, H1, Text } from '../styles/HomeStyles.js';
import { HeaderWrapper, OverlayText, SectionHeader, theme } from '../styles/Globals.js';

const IndexPage = () => {
  const [seen, setSeen] = useState(false);

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
      allStrapiTour {
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
    const timeout = setTimeout(() => {
      setSeen(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // disable scrolling when pop up appears
  useEffect(() => {
    if (seen === true) {
      setBodyPositions('hidden', 'hidden', '100vh', 'relative');
    }
  }, [seen, setBodyPositions]);

  const videoSource = 'https://spiritboard.s3.amazonaws.com/Band_Stock_1.mp4';

  const lastNews = data.allStrapiPost.edges.length - 1;

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
          <H1>Spiritboard</H1>
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
      <SectionHeader>TOUR</SectionHeader>
      {data.allStrapiTour.edges ? (
        data.allStrapiTour.edges.map(tour => (
          <Tour
            date={tour.node.date}
            location={tour.node.location}
            name={tour.node.venuename}
            tickets={tour.node.ticketsURL}
            description={tour.node.description}
            key={tour.node.strapiId}
          />
        ))
      ) : (
        <Text>There are no shows currently scheduled</Text>
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
