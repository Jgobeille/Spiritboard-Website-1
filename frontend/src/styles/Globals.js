import styled from 'styled-components';

/* 
  Learned how to set up media Queries here:
  https://jsramblings.com/how-to-use-media-queries-with-styled-components/
 */

// Theme

export const theme = {
  primaryBlack: '#0F0E0E',
  secondaryWhite: '#f7f7ff',
  highlightYellow: '#edb928',
  headerPurple: '#661384',
  accentPinkRed: '#f61067',
  lavender: '#c9c9ee',
  primaryFont: 'ouijaboard',
};
// Media Queries

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const minWidthDevice = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const maxWidthDevice = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: ${theme.secondaryWhite};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 2em;
  border: 2px solid ${theme.secondaryWhite};
  border-radius: 3px;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${theme.accentPinkRed};
    border: 2px solid ${theme.accentPinkRed};
  }
`;

export const HeaderPic = styled.img`
  z-index: 1;
  top: 0;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.3);
  height: 92vh;
  width: 100%;
  object-fit: fill;
  padding: 0;

  @media screen and ${maxWidthDevice.tablet} {
    object-fit: cover;
  }
`;

export const SectionHeader = styled.h1`
  color: ${theme.accentPinkRed};
  font-family: ${theme.primaryFont};
  letter-spacing: 2px;
  /* top | right | bottom | left */
  margin: 50px 0 50px 0;
  text-align: center;
  font-size: ${props => (props.big ? '5em' : '2em')};
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const HeaderWrapper = styled(Wrapper)`
  width: 100%;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 8vh;
  color: ${theme.secondaryWhite};
  margin-bottom: 50px;
`;

export const OverlayText = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
