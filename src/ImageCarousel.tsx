import React from "react";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components/macro";
import { BREAKPOINT_DESKTOP } from "./constants";

const CarouselStyles = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINT_DESKTOP}px) {
    img {
      height: auto;
    }
  }
`;

export default () => {
  const images = [
    {
      imgPath: "img/carousel/dance.jpg",
      title: "test2",
      subTitle: "subTest2",
    },
    {
      imgPath: "img/carousel/ski.jpg",
      title: "test2",
      subTitle: "subTest2",
    },
    {
      imgPath: "img/carousel/safari.jpg",
      title: "test2",
      subTitle: "subTest2",
    },
    {
      imgPath: "img/carousel/funny.jpg",
      title: "test",
      subTitle: "subTest",
    },
  ];

  return (
    <CarouselStyles>
      <Carousel indicators={false} animation="fade" interval={5000}>
        {images.map(({ imgPath, title }) => (
          <img src={imgPath} title={title} alt={title} />
        ))}
      </Carousel>
    </CarouselStyles>
  );
};
