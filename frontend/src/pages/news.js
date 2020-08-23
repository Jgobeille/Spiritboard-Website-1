import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import News from '../components/news';

import { Text } from '../styles/HomeStyles';
import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader } from '../styles/Globals';

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
      {data.allStrapiPost.edges ? (
        data.allStrapiPost.edges.map(post => (
          <News
            title={post.node.title}
            date={post.node.date}
            image={post.node.image ? post.node.image.publicURL : ''}
            description={post.node.description}
            firstName={post.node.created_by.firstname}
            lastName={post.node.created_by.lastname}
            key={post.node.strapiId}
          />
        ))
      ) : (
        <Text>There are no new updates yet</Text>
      )}
    </Layout>
  );
};

export default NewsPage;
