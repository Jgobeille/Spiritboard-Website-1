import React from 'react';

import { Svg, Path, Text } from '../../styles/SvgStyles.js';

const JoinTheSeance = () => (
  <Svg viewBox="0 0 500 150">
    <Path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <Text>
      <textPath xlinkHref="#curve">JOIN THE SEANCE</textPath>
    </Text>
  </Svg>
);

export default JoinTheSeance;
