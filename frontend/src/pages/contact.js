/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader } from '../styles/Globals';

import { FormButton, FormWrapper, Input, Text, TextArea } from '../styles/ContactStyles';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Want to book a show with us or just chat? Shoot us an email!" />
    <HeaderWrapper>
      <HeaderPic src="https://spiritboard.s3.amazonaws.com/6393DE97-B3D7-4791-8857-A77B6CFD686F.jpeg" />
      <OverlayText>
        <SectionHeader big>CONTACT</SectionHeader>
      </OverlayText>
    </HeaderWrapper>
    <FormWrapper>
      <Text>Want to book us for a show or questions about merch? Contact us here!</Text>
      <form name="contact-form" encType="application/x-www-form-urlencoded" method="POST" data-netlify="true" netlify>
        <label>
          <Input type="text" id="fname" name="firstname" placeholder="first name" />
        </label>

        <label>
          <Input type="text" id="lname" name="lastname" placeholder="last name" />
        </label>

        <label>
          <Input type="email" id="email" name="email" placeholder="email" />
        </label>

        <label>
          <TextArea id="message" name="message" placeholder="Write something.." />
        </label>
        <FormButton type="submit">Send</FormButton>
      </form>
    </FormWrapper>
  </Layout>
);

export default ContactPage;
