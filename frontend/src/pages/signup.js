/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { HeaderPic, HeaderWrapper, OverlayText, SectionHeader, theme, Wrapper } from '../styles/Globals';

import { FormButton, Input, Text } from '../styles/ContactStyles';

const SignUpInput = styled(Input)`
  margin-right: 30px;
`;

const SignUpContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Message = styled.p`
  color: ${theme.accentPinkRed};
  text-align: left;
`;

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

  splitMessage = message => {
    // get the first and last position of <a> and </a>
    // add that content to a new variable
    // then get the url from that text and make a link

    if (message) {
      console.log(typeof message);
      if (message.includes('<a href')) {
        const index1 = message.indexOf('"');
        const index2 = message.lastIndexOf('"');
        console.log(index1);
        console.log(index2);
        const URLSubstring = message.substring(index1 + 1, index2);
        this.setState({
          url: URLSubstring,
        });
      }
    }
  };

  _handleSubmit = async e => {
    const { email, firstName, lastName } = this.state;
    e.preventDefault();
    const result = await addToMailchimp(email, { firstName, lastName });
    // I recommend setting `result` to React state
    // but you can do whatever you want
    this.splitMessage(result.msg);
    this.setState({
      result,
      resultMsg: result.msg,
    });
  };

  render() {
    const { email, firstName, lastName, result, resultMsg, url } = this.state;

    return (
      <Layout>
        <SEO title="Contact" description="Want to book a show with us or just chat? Shoot us an email!" />
        <HeaderWrapper>
          <HeaderPic src="https://spiritboard.s3.amazonaws.com/6393DE97-B3D7-4791-8857-A77B6CFD686F.jpeg" />
          <OverlayText>
            <SectionHeader>Sign Up</SectionHeader>
          </OverlayText>
        </HeaderWrapper>
        <Wrapper>
          <Text>Sign up to get updates on new merch and upcoming shows!</Text>
          {result ? (
            <div>
              * {result.msg}
              <Message>Please visit this link to update your profile:</Message>
              <Link to={url}>link</Link>
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
