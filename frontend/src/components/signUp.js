/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import PropTypes from "prop-types";

import addToMailchimp from "gatsby-plugin-mailchimp";

import { Wrapper } from "../styles/Globals";

import { StyledLink } from "../styles/HeaderStyles";

import { FormButton } from "../styles/ContactStyles";

import { SignUpInput, SignUpContent, Message } from "../styles/SignUpStyles";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      result: "",
      resultMsg: "",
      url: "",
    };
  }

  change = (event) => {
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
  splitMessage = (message) => {
    // get the first and last position of <a> and </a>
    // add that content to a new variable
    // then get the url from that text and make a link

    if (message) {
      if (message.includes("<a href")) {
        const URLindex1 = message.indexOf('"');
        const URLindex2 = message.lastIndexOf('"');
        const messageEndIndex = message.indexOf("<a");
        const messageSubstring = message.substring(0, messageEndIndex);
        const URLSubstring = message.substring(URLindex1 + 1, URLindex2);
        this.setState({
          url: URLSubstring,
          resultMsg: messageSubstring,
        });
      } else {
        this.setState({
          resultMsg: message,
          url: "",
        });
      }
    }
  };

  _handleSubmit = async (e) => {
    const { email } = this.state;
    e.preventDefault();
    const result = await addToMailchimp(email);
    this.splitMessage(result.msg);
    this.setState({
      result,
    });
  };

  render() {
    const { email, result, resultMsg, url } = this.state;
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
          ""
        )}
        {url ? (
          <>
            <Message>
              Please visit this <StyledLink to={url}>link</StyledLink> to update
              your profile!
            </Message>
          </>
        ) : (
          ""
        )}
        {this.splitMessage()}
        <form
          onSubmit={(e) => this._handleSubmit(e, email)}
          action="https://spiritboardband.us17.list-manage.com/subscribe/post?u=b0659c53e1bb70c70946f45f5&amp;id=1c9940f486"
          method="POST"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <SignUpContent>
            <label htmlFor="email" />
            <SignUpInput
              type="email"
              value={email}
              name="email"
              placeholder="email address"
              onChange={this.change}
              required
            />

            <FormButton
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            >
              Submit
            </FormButton>
            {showCloseButton ? (
              <FormButton
                type=""
                onClick={() => this.handleClick()}
                name="close"
                className="button"
              >
                Close
              </FormButton>
            ) : (
              ""
            )}
          </SignUpContent>
        </form>
      </Wrapper>
    );
  }
}

SignUp.propTypes = {
  toggle: PropTypes.func,
  showCloseButton: PropTypes.element,
};
