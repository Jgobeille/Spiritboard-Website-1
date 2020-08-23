import React from 'react';
import PropTypes from 'prop-types';

import SignUp from './signUp';
import JoinTheSeance from './svgs/joinTheSeance.js';

import { Wrapper } from '../styles/Globals';

import { Modal } from '../styles/PopUpStyles';
import { Candle, Glow, Flames, Thread } from '../styles/CandleStyles';

const PopUp = ({ toggle }) => (
  <Modal>
    <Wrapper>
      <JoinTheSeance fill="black" />
      <Candle>
        <Glow />
        <Flames />
        <Thread />
      </Candle>
      <SignUp showCloseButton toggle={toggle} />
    </Wrapper>
  </Modal>
);

PopUp.propTypes = {
  toggle: PropTypes.func,
};
export default PopUp;
