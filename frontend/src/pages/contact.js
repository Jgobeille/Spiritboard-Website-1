import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Button, HeaderPic, HeaderWrapper, OverlayText, SectionHeader, Wrapper } from '../styles/Globals';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Want to book a show with us or just chat? Shoot us an email!" />
    <HeaderWrapper>
      <HeaderPic src="https://spiritboard.s3.amazonaws.com/887762F1-A6F4-4DAE-B3A0-F71E3887DD2F.png" />
      <OverlayText>
        <SectionHeader>CONTACT</SectionHeader>
      </OverlayText>
    </HeaderWrapper>
    <Wrapper>
      <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="fname">
          First Name
          <input type="text" id="fname" name="firstname" placeholder="first name" />
        </label>

        <label htmlFor="lname">
          Last Name
          <input type="text" id="lname" name="lastname" placeholder="last name" />
        </label>

        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" placeholder="email" />
        </label>

        <label htmlFor="message">
          Message
          <textarea id="message" name="message" placeholder="Write something.." />
        </label>
        <Button type="submit">Send</Button>
      </form>
    </Wrapper>
  </Layout>
);

export default ContactPage;
