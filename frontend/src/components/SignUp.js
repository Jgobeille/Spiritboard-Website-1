/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Wrapper } from '../styles/Globals';

import { StyledLink } from '../styles/HeaderStyles';

import { FormButton } from '../styles/ContactStyles';

import { SignUpInput, SignUpContent, Message } from '../styles/SignUpStyles';

export default class SignUp extends Component {
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

  handleClick = () => {
    const { toggle } = this.props;
    toggle();
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
    const { showCloseButton } = this.props;
    return (
      <Wrapper>
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
          <>
            <Message>
              Please visit this <StyledLink to={url}>link</StyledLink> to update your profile!
            </Message>
          </>
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

            {/* <SignUpInput
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
            /> */}

            <FormButton type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
              Submit
            </FormButton>
            {showCloseButton ? (
              <FormButton type="" onClick={() => this.handleClick()} name="close" className="button">
                Close
              </FormButton>
            ) : (
              ''
            )}
          </SignUpContent>
        </form>
      </Wrapper>
    );
  }
}