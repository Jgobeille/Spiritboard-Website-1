import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Text } from '../styles/HomeStyles.js';
import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, theme, Wrapper } from '../styles/Globals.js';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeaderWrapper>
      <HeaderPic src="https://spiritboard.s3.amazonaws.com/Adobe_Post_20200813_2358180.9424302084233002.png" />
      <OverlayText>
        <SectionHeader big>404</SectionHeader>
      </OverlayText>
    </HeaderWrapper>
    <Wrapper>
      <h2 style={{ color: '#f7f7ff' }}>NOT FOUND</h2>
      <Text>We couldn't find the page you are looking for!</Text>
      <Text>
        You can return to the Home page by clicking <Link to="/">here</Link>
      </Text>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
