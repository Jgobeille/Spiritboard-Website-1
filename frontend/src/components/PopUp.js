/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SignUp from './SignUp';
import JoinTheSeance from './svgs/joinTheSeance.js';

import { Wrapper } from '../styles/Globals';

import { Modal } from '../styles/PopUpStyles';
import { Candle, Glow, Flames, Thread } from '../styles/CandleStyles';

export default class PopUp extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <Modal>
        <Wrapper>
          <JoinTheSeance />
          <Candle>
            <Glow />
            <Flames />
            <Thread />
          </Candle>
          <SignUp showCloseButton toggle={toggle} />
        </Wrapper>
      </Modal>
    );
  }
}
