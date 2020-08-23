import React from 'react';

import { Svg, Path } from '../../styles/SvgStyles.js';

const FacebookLogo = ({ id, fill, footer, height, width }) => (
  <Svg
    id={id}
    height={height}
    width={width}
    enableBackground="new 0 0 30 30"
    version="1.1"
    viewBox="0 0 30 30"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <Path
        fill={fill}
        d="M22,16l1-5l-5,0.001V7c0-1.544,0.784-2,3-2h2V0c0,0-2.05,0-4,0c-4.072,0-7,2.435-7,7v4l-5,0v5h5v14h6V16H22z"
        id={footer}
      />
    </g>
  </Svg>
);

export default FacebookLogo;
