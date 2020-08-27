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
        data.allStrapiTour.edges
          .slice(1)
          .map(tour => (
            <Tour
              date={tour.node.date}
              location={tour.node.location}
              name={tour.node.venuename}
              tickets={tour.node.ticketsURL}
              description={tour.node.description}
              key={tour.node.strapiId}
            />
          ))
      )}
    </Layout>
  );
};

export default TourPage;
