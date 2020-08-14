import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tour from '../components/tour';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader } from '../styles/Globals';

const TourPage = () => (
  <Layout>
    <SEO title="Tour" description="Stay up to date with us! All future tour dates will be posted here!" />
    <HeaderWrapper>
      <HeaderPic src="https://spiritboard.s3.amazonaws.com/887762F1-A6F4-4DAE-B3A0-F71E3887DD2F.png" />
      <OverlayText>
        <SectionHeader>TOUR</SectionHeader>
      </OverlayText>
    </HeaderWrapper>
    <Tour />
  </Layout>
);

export default TourPage;
