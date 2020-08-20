/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SignUp from './SignUp';

export default class PopUp extends Component {
  handleClick = () => {
    const { toggle } = this.props;
    toggle();
  };

  render() {
    return (
      <div className="modal">
        <div>
          <SignUp />
        </div>
      </div>
    );
  }
}
