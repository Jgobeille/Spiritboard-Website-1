import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Text } from "../styles/HomeStyles.js";
import { SectionHeader, Wrapper } from "../styles/Globals.js";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Wrapper>
      <SectionHeader>404</SectionHeader>
      <Text>We couldn't find the page you are looking for!</Text>
      <Text>
        You can return to the Home page by clicking <Link to="/">here</Link>
      </Text>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
