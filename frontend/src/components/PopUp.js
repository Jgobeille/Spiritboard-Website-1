/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SignUp from './SignUp';

import { Wrapper } from '../styles/Globals';

export default class PopUp extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <div className="modal">
        <Wrapper>
          <svg viewBox="0 0 500 150">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text fontSize="40px">
              <textPath xlinkHref="#curve">JOIN THE SEANCE</textPath>
            </text>
          </svg>
          <div className="candle">
            <span className="glow" />
            <span className="flames" />
            <span className="thread" />
          </div>
          <SignUp showCloseButton toggle={toggle} />
        </Wrapper>
      </div>
    );
  }
}
