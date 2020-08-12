import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

import { HeaderVideo } from '../styles/HomeStyles.js';
import { Wrapper } from '../styles/Globals.js';

const IndexPage = () => {
  const videoSource = 'https://spiritboard.s3.amazonaws.com/Band_Stock_1.mp4';

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <HeaderVideo loop autoPlay muted>
          <track kind="captions" />
          <source src={videoSource} type="video/mp4" />
          <source src={videoSource} type="video/ogg" />
          Your browser does not support the video tag.
        </HeaderVideo>
        <h1>Spiritboard</h1>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
