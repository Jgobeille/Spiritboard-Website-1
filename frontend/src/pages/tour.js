import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tour from '../components/tour';

import { Text } from '../styles/HomeStyles';
import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, Wrapper } from '../styles/Globals';

const TourPage = () => {
  const data = useStaticQuery(graphql`
    query {
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

  // Done with for loop instead of map to save efficiency from slicing the first item in the array
  const shows = [];
  for (let i = 1; i < data.allStrapiTour.edges.length; i += 1) {
    shows.push(
      <Tour
        date={data.allStrapiTour.edges[i].node.date}
        location={data.allStrapiTour.edges[i].node.location}
        name={data.allStrapiTour.edges[i].node.venuename}
        tickets={data.allStrapiTour.edges[i].node.ticketsURL}
        description={data.allStrapiTour.edges[i].node.description}
        key={data.allStrapiTour.edges[i].node.strapiId}
      />
    );
  }
  return (
    <Layout>
      <SEO title="Tour" description="Stay up to date with us! All future tour dates will be posted here!" />
      <HeaderWrapper>
        <HeaderPic src="https://spiritboard.s3.amazonaws.com/887762F1-A6F4-4DAE-B3A0-F71E3887DD2F.png" />
        <OverlayText>
          <SectionHeader big>TOUR</SectionHeader>
        </OverlayText>
      </HeaderWrapper>
      {data.allStrapiTour.edges.length === 1 ? (
        <Wrapper>
          <Text>There are no shows currently scheduled</Text>
        </Wrapper>
      ) : (
        <>{shows}</>
      )}
    </Layout>
  );
};

export default TourPage;
