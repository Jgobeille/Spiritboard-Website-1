import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

import { HeaderVideo, SocialIcons, H1 } from '../styles/HomeStyles.js';
import { Wrapper, theme } from '../styles/Globals.js';

// SVGs
// import { ReactComponent as FacebookLogo } from '../socialmedia/facebook.svg';

const IndexPage = () => {
  const videoSource = 'https://spiritboard.s3.amazonaws.com/Band_Stock_1.mp4';

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <HeaderVideo loop autoPlay muted>
          <track kind="captions" />
          <source src={videoSource} type="video/mp4" />
          <source src={videoSource} type="video/ogg" />
          Your browser does not support the video tag.
        </HeaderVideo>
        <div className="videoOverlayText">
          <H1>Spiritboard</H1>
          <SocialIcons>
            <Link to="/">
              <svg
                enableBackground="new 0 0 30 30"
                height="30px"
                id="spotify"
                version="1.1"
                viewBox="0 0 30 30"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={theme.secondaryWhite}
                  d="M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15c8.283,0,15-6.716,15-15S23.283,0,15,0z M21.086,22.078  c-0.244,0-0.408-0.084-0.635-0.223c-2.176-1.314-4.885-2.006-7.762-2.006c-1.605,0-3.22,0.206-4.731,0.52  c-0.246,0.054-0.555,0.149-0.739,0.149c-0.569,0-0.949-0.453-0.949-0.943c0-0.631,0.363-0.943,0.816-1.03  c1.853-0.422,3.698-0.663,5.614-0.663c3.283,0,6.207,0.753,8.725,2.262c0.375,0.219,0.594,0.441,0.594,0.996  C22.018,21.681,21.578,22.078,21.086,22.078z M22.719,18.107c-0.324,0-0.529-0.131-0.75-0.26c-2.441-1.447-5.822-2.409-9.525-2.409  c-1.899,0-3.539,0.266-4.896,0.627c-0.292,0.08-0.456,0.167-0.729,0.167c-0.646,0-1.172-0.526-1.172-1.177  c0-0.637,0.309-1.076,0.933-1.252c1.686-0.463,3.408-0.82,5.914-0.82c3.927,0,7.726,0.978,10.71,2.765  c0.502,0.288,0.686,0.651,0.686,1.186C23.889,17.583,23.371,18.107,22.719,18.107z M24.58,13.49c-0.305,0-0.486-0.074-0.771-0.23  c-2.715-1.628-6.93-2.524-11.004-2.524c-2.034,0-4.1,0.207-5.992,0.72c-0.218,0.055-0.493,0.164-0.769,0.164  c-0.8,0-1.414-0.633-1.414-1.433c0-0.815,0.505-1.273,1.05-1.434c2.138-0.63,4.525-0.924,7.119-0.924  c4.404,0,9.039,0.906,12.424,2.895c0.457,0.258,0.773,0.647,0.773,1.361C25.996,12.903,25.338,13.49,24.58,13.49z"
                  id="spot"
                />
              </svg>
            </Link>
            <Link to="/">
              <svg
                enableBackground="new 0 0 30 30"
                height="30px"
                id="facebook"
                version="1.1"
                viewBox="0 0 30 30"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill={theme.secondaryWhite}
                    d="M22,16l1-5l-5,0.001V7c0-1.544,0.784-2,3-2h2V0c0,0-2.05,0-4,0c-4.072,0-7,2.435-7,7v4l-5,0v5h5v14h6V16H22z"
                    id="f"
                  />
                </g>
              </svg>
            </Link>
            <Link to="/">
              <svg
                enableBackground="new 0 0 30 30"
                height="30px"
                id="instagram"
                version="1.1"
                viewBox="0 0 30 30"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill={theme.secondaryWhite}
                    d="M26,0C26,0,3.529,0,3.5,0C1.582,0,0.027,1.586,0.004,3.5L0,3.458c0,0,0,23.028,0,23.042    C0,28.434,1.567,30,3.5,30c0.014,0,23,0,23,0c1.873-0.067,3.5-1.609,3.5-3.5c0-0.014,0-23,0-23C29.978,1.629,27.859,0.067,26,0z     M15,9.5c3.038,0,5.5,2.463,5.5,5.5c0,3.036-2.462,5.5-5.5,5.5c-3.037,0-5.5-2.464-5.5-5.5C9.5,11.963,11.963,9.5,15,9.5z M26,24    c0,1.104-0.896,2-2,2H6c-1.104,0-2-0.896-2-2V12.5h2.359C6.13,13.294,6,14.132,6,15c0,4.97,4.031,9,9,9c4.972,0,9-4.03,9-9    c0-0.868-0.13-1.706-0.359-2.5H26l-0.004,11.461C25.996,23.975,26,23.986,26,24z M26,5.008v3.016h-0.005    c-0.013,0.535-0.442,0.965-0.979,0.974V9H22c-0.545,0-0.982-0.436-0.995-0.977H21V5.008h0.002C21.002,5.005,21,5.003,21,5    c0-0.552,0.447-1,1-1h3.016v0.003C25.561,4.012,26,4.453,26,5c0,0.003-0.002,0.005-0.002,0.008H26z"
                    id="camera"
                  />
                </g>
              </svg>
            </Link>
            <Link to="/">
              <svg
                enableBackground="new 0 0 30 30"
                height="30px"
                id="twitter"
                version="1.1"
                viewBox="0 0 30 30"
                width="30px"
              >
                <g>
                  <path
                    fill={theme.secondaryWhite}
                    d="M30,6.708C28.895,7.199,27.244,7.851,26,8c1.273-0.762,2.539-2.561,3-4c-0.971,0.577-2.087,1.355-3.227,1.773    L25,5c-1.121-1.197-2.23-2-4-2c-3.398,0-6,2.602-6,6c0,0.399,0.047,0.7,0.11,0.956L15,10C9,10,5.034,8.724,2,5    C1.469,5.908,1,6.872,1,8c0,2.136,1.348,3.894,3,5c-1.009-0.033-2.171-0.542-3-1c0,2.98,4.186,6.432,7,7c-1,1-4.623,0.074-5,0    c0.784,2.447,3.309,3.949,6,4c-2.105,1.648-4.647,2.51-7.531,2.51c-0.498,0-0.987-0.029-1.469-0.084C2.723,27.17,6.523,28,10,28    c11.322,0,17-8.867,17-17c0-0.268,0.008-0.736,0-1C28.201,9.132,29.172,7.942,30,6.708z"
                    id="bird"
                  />
                </g>
              </svg>
            </Link>
          </SocialIcons>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
