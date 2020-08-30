import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Shows from '../components/shows';

import { Text } from '../styles/HomeStyles';
import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, Wrapper } from '../styles/Globals';

const ShowPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
      <SEO title="Show" description="Stay up to date with us! All future show dates will be posted here!" />
      <HeaderWrapper>
        <HeaderPic src="https://spiritboard.s3.amazonaws.com/887762F1-A6F4-4DAE-B3A0-F71E3887DD2F.png" />
        <OverlayText>
          <SectionHeader big>SHOWS</SectionHeader>
        </OverlayText>
      </HeaderWrapper>
      {data.allStrapiShow.edges.length === 1 ? (
        <Wrapper>
          <Text>There are no shows currently scheduled</Text>
        </Wrapper>
      ) : (
        <>{shows}</>
      )}
    </Layout>
  );
};

export default ShowPage;
