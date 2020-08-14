import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import News from '../components/news';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader } from '../styles/Globals';

const NewsPage = () => (
  <Layout>
    <SEO
      title="News"
      description="Stay up to date with us! We post all news regarding new merch, music, and upcoming shows"
    />
    <HeaderWrapper>
      <HeaderPic src="https://spiritboard.s3.amazonaws.com/Adobe_Post_20200813_2358180.9424302084233002.png" />
      <OverlayText>
        <SectionHeader>NEWS</SectionHeader>
      </OverlayText>
    </HeaderWrapper>
    <News />
  </Layout>
);

export default NewsPage;
