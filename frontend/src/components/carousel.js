import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  max-width: 1024px;
  margin: 0 auto;
`;
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: (i) => (
        <button
          className
          style={{
            "&::before": {
              color: "white !important",
            },
          }}
        >
          {i + 1}
        </button>
      ),
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <img
              alt="spiritboard merch"
              src="https://spirit-board-site-images.s3.us-east-2.amazonaws.com/SBmerch001-3.jpg"
            />
          </div>
          <div>
            <img
              alt="spiritboard merch"
              src="https://spirit-board-site-images.s3.us-east-2.amazonaws.com/SBmerch001-4.jpg"
            />
          </div>
          <div>
            <img
              alt="spiritboard merch"
              src="https://spirit-board-site-images.s3.us-east-2.amazonaws.com/SBmerch001.jpg"
            />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
