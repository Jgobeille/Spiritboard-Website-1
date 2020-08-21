/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Layout from '../components/layout';
import SignUp from '../components/signUp';
import SEO from '../components/seo';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, Wrapper } from '../styles/Globals';

import { Text } from '../styles/ContactStyles';

const SignUpPage = () => (
  <Layout>
    <SEO title="Sign Up" description="Sign up to get updates on new merch and upcoming shows!" />
    <HeaderWrapper>
      <HeaderPic src="https://spiritboard.s3.amazonaws.com/6393DE97-B3D7-4791-8857-A77B6CFD686F.jpeg" />
      <OverlayText>
        <SectionHeader big>SIGN UP</SectionHeader>
      </OverlayText>
    </HeaderWrapper>
    <Wrapper>
      <Text>Sign up to get updates on new merch and upcoming shows!</Text>
      <SignUp />
    </Wrapper>
  </Layout>
);

export default SignUpPage;
