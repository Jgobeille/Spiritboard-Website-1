import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tour from '../components/tour';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader } from '../styles/Globals';

const TourPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTour {
        edges {
          node {
            strapiId
            name
            date
            location
            description
            ticket
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
      {data.allStrapiTour.edges.map(tour => (
        <Tour
          date={tour.node.date}
          location={tour.node.location}
          name={tour.node.venuename}
          tickets={tour.node.ticketsURL}
          description={tour.node.description}
          key={tour.node.strapiId}
        />
      ))}
    </Layout>
  );
};

export default TourPage;
