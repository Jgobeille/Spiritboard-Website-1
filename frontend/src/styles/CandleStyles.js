import styled, { keyframes } from 'styled-components';

/* Credit: https://codepen.io/comehope/pen/LBPvON */

export const move = keyframes`
      0%, 100% {
        transform: rotate(2deg);
    }
  
    50% {
        transform: rotate(-2deg);
    }

  `;

export const enlarge = keyframes`
  
    0%, 100% {
        height: 12em;
        top: -12em;
    }
  
    50% {
        height: 14em;
        top: -13em;
    }
  `;

export const blink = keyframes`
      to {
        filter: blur(6em) opacity(0.8);
    }
  `;

export const Candle = styled.div`
  width: 15em;
  height: 20em;
  font-size: 7px;
  background: linear-gradient(orange, darkorange, sienna, saddlebrown 50%, rgba(0, 0, 0, 0.6));
  box-shadow: inset 2em -3em 5em rgba(0, 0, 0, 0.4), inset -2em 0 5em rgba(0, 0, 0, 0.4);
  border-radius: 10em / 4em;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  &:before {
    content: '';
    position: absolute;
    width: inherit;
    height: 5em;
    border: 0.2em solid darkorange;
    border-radius: 50%;
    box-sizing: border-box;
    background: radial-gradient(#444, orange, saddlebrown, sienna, darkorange);
    filter: opacity(0.7);
  }
`;

export const Thread = styled.span`
  position: absolute;
  width: 0.6em;
  height: 3.6em;
  top: -1.8em;
  background: linear-gradient(#111, black, orange 90%);
  border-radius: 40% 40% 0 0;
`;

export const Flames = styled.span`
  position: absolute;
  width: 2.4em;

  &:before {
    content: '';
    position: absolute;
    width: inherit;
    height: 6em;
    background-color: royalblue;
    top: -4.8em;
    border-radius: 50% 50% 35% 35%;
    border: 0.2em solid dodgerblue;
    box-sizing: border-box;
    filter: opacity(0.7);
  }

  &:after {
    content: '';
    position: absolute;
    width: inherit;
    height: 12em;
    top: -12em;
    background: linear-gradient(white 80%, transparent);
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 -0.6em 0.4em darkorange;
    animation: ${enlarge} 5s linear infinite, ${move} 6s linear infinite;
  }
`;

export const Glow = styled.span`
  position: absolute;
  width: 10em;
  height: 18em;
  background-color: orangered;
  border-radius: 50%;
  top: -17em;
  filter: blur(6em);
  animation: ${blink} 100ms infinite;
`;
