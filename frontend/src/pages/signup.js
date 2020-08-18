/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, Wrapper } from '../styles/Globals';

import { StyledLink } from '../styles/HeaderStyles';

import { FormButton, Text } from '../styles/ContactStyles';

import { SignUpInput, SignUpContent, Message } from '../styles/SignUpStyles';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      result: '',
      resultMsg: '',
      url: '',
    };
  }

  change = event => {
    const { name } = event.target;
    const { value } = event.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  // If error message has url. split url and message apart and displays url correctly
  splitMessage = message => {
    // get the first and last position of <a> and </a>
    // add that content to a new variable
    // then get the url from that text and make a link

    if (message) {
      if (message.includes('<a href')) {
        const URLindex1 = message.indexOf('"');
        const URLindex2 = message.lastIndexOf('"');
        const messageEndIndex = message.indexOf('<a');
        const messageSubstring = message.substring(0, messageEndIndex);
        const URLSubstring = message.substring(URLindex1 + 1, URLindex2);
        this.setState({
          url: URLSubstring,
          resultMsg: messageSubstring,
        });
      } else {
        this.setState({
          resultMsg: message,
          url: '',
        });
      }
    }
  };

  _handleSubmit = async e => {
    const { email, firstName, lastName } = this.state;
    e.preventDefault();
    const result = await addToMailchimp(email, { firstName, lastName });
    this.splitMessage(result.msg);
    this.setState({
      result,
    });
  };

  render() {
    const { email, firstName, lastName, result, resultMsg, url } = this.state;

    return (
      <Layout>
        <SEO title="Sign Up" description="Sign up to get updates on new merch and upcoming shows!" />
        <HeaderWrapper>
          <HeaderPic src="https://spiritboard.s3.amazonaws.com/6393DE97-B3D7-4791-8857-A77B6CFD686F.jpeg" />
          <OverlayText>
            <SectionHeader>SIGN UP</SectionHeader>
          </OverlayText>
        </HeaderWrapper>
        <Wrapper>
          <Text>Sign up to get updates on new merch and upcoming shows!</Text>
          {result ? (
            <div>
              <Message>
                *{result.result}: {resultMsg}
              </Message>
            </div>
          ) : (
            ''
          )}
          {url ? (
            <div>
              <Message>
                Please visit this <StyledLink to={url}>link</StyledLink> to update your profile!
              </Message>
            </div>
          ) : (
            ''
          )}
          {this.splitMessage()}
          <form
            onSubmit={e => this._handleSubmit(e, email, { firstName, lastName })}
            action="https://gmail.us17.list-manage.com/subscribe/post?u=8f71d2f15da02bc250a388b00&amp;id=77804799f4"
            method="POST"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <SignUpContent>
              <label htmlFor="mce-EMAIL" />
              <SignUpInput
                type="email"
                value={email}
                name="email"
                placeholder="email address"
                onChange={this.change}
                required
              />

              <SignUpInput
                type="text"
                name="firstName"
                tabIndex="-1"
                placeholder="first name"
                onChange={this.change}
                value={firstName}
              />

              <SignUpInput
                type="text"
                name="lastName"
                tabIndex="-1"
                placeholder="last name"
                onChange={this.change}
                value={lastName}
              />

              <FormButton type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                Submit
              </FormButton>
            </SignUpContent>
          </form>
        </Wrapper>
      </Layout>
    );
  }
}
