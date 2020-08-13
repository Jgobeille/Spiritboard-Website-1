import React from 'react';

import { Wrapper, SectionHeader } from '../styles/Globals.js';

const Videos = () => (
  <Wrapper>
    <SectionHeader>VIDEOS</SectionHeader>

    <iframe
      title="music-vid"
      width="100%"
      height="600"
      src="https://www.youtube.com/embed/RyNzxuAQWoY"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Wrapper>
);

export default Videos;
