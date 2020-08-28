import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import News from '../components/news';

import { Text } from '../styles/HomeStyles';
import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, Wrapper } from '../styles/Globals';

const NewsPage = () => {
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
    }
  `);

  // Done with for loop instead of map to save efficiency from slicing the first item in the array
  const posts = [];
  for (let i = 1; i < data.allStrapiPost.edges.length; i += 1) {
    posts.push(
      <News
        title={data.allStrapiPost.edges[i].node.title}
        date={data.allStrapiPost.edges[i].node.date}
        image={data.allStrapiPost.edges[i].node.image ? data.allStrapiPost.edges[i].node.image.publicURL : ''}
        description={data.allStrapiPost.edges[i].node.description}
        firstName={data.allStrapiPost.edges[i].node.created_by.firstname}
        lastName={data.allStrapiPost.edges[i].node.created_by.lastname}
        key={data.allStrapiPost.edges[i].node.strapiId}
      />
    );
  }

  return (
    <Layout>
      <SEO
        title="News"
        description="Stay up to date with us! We post all news regarding new merch, music, and upcoming shows"
      />
      <HeaderWrapper>
        <HeaderPic src="https://spiritboard.s3.amazonaws.com/Adobe_Post_20200813_2358180.9424302084233002.png" />
        <OverlayText>
          <SectionHeader big>NEWS</SectionHeader>
        </OverlayText>
      </HeaderWrapper>
      {data.allStrapiPost.edges.length === 1 ? (
        <Wrapper>
          <Text>There are no new updates yet</Text>
        </Wrapper>
      ) : (
        <>{posts}</>
      )}
    </Layout>
  );
};

export default NewsPage;
