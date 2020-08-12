/* 
  Learned how to set up media Queries here:
  https://jsramblings.com/how-to-use-media-queries-with-styled-components/
 */

module.exports = {
  // Media Queries
  minWidthDevice: {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: '375px')`,
    mobileL: `(min-width: '425px')`,
    tablet: `(min-width: '768px')`,
    laptop: `(min-width: '1024px')`,
    laptopL: `(min-width:'1440px')`,
    desktop: `(min-width: '2560px')`,
    desktopL: `(min-width: '2560px')`,
  },

  maxWidthDevice: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: '375px')`,
    mobileL: `(max-width: '425px')`,
    tablet: `(max-width: '768px')`,
    laptop: `(max-width: '1024px')`,
    laptopL: `(max-width:'1440px')`,
    desktop: `(max-width: '2560px')`,
    desktopL: `(max-width: '2560px')`,
  },
};
