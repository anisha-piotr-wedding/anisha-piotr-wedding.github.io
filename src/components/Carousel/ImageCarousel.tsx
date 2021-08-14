import { useMediaQuery } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components/macro";
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
  BREAKPOINT_TABTOP,
} from "../../constants";

const CarouselStyles = styled.div<{ shiftLeft: number }>`
  margin-left: ${(props) => (props.shiftLeft < 0 ? 0 : -props.shiftLeft)}px;
  margin-right: ${(props) => (props.shiftLeft > 0 ? 0 : props.shiftLeft)}px;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    margin-left: ${(props) =>
      props.shiftLeft < 0 ? 0 : -props.shiftLeft / 2}px;
    margin-right: ${(props) =>
      props.shiftLeft > 0 ? 0 : props.shiftLeft / 2}px;
    img {
      height: 42vh;
    }
  }

  @media (max-width: ${BREAKPOINT_TABLET}px) {
    margin-left: ${(props) =>
      props.shiftLeft < 0 ? 0 : -props.shiftLeft / 2}px;
    margin-right: ${(props) =>
      props.shiftLeft > 0 ? 0 : props.shiftLeft / 2}px;
    img {
      height: 42vh;
    }
  }

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    margin-left: ${(props) => (props.shiftLeft < 0 ? 0 : -props.shiftLeft)}px;
    margin-right: ${(props) => (props.shiftLeft > 0 ? 0 : props.shiftLeft)}px;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

export default () => {
  const images = [
    {
      imgPath: "dance.jpg",
    },
    {
      imgPath: "ski.jpg",
    },
    {
      imgPath: "safari.jpg",
    },
    {
      imgPath: "funny.jpg",
    },
    {
      imgPath: "water.jpg",
    },
    {
      imgPath: "hobbit.jpg",
    },
    {
      imgPath: "landscape.jpg",
      shiftLeft: 500,
    },
    {
      imgPath: "camp2.jpg",
    },
    {
      imgPath: "derp.jpg",
    },
    {
      imgPath: "ringLandscape.jpg",
      shiftLeft: 180,
    },
    {
      imgPath: "train.jpg",
      shiftLeft: -200,
    },
    {
      imgPath: "snow_scene.jpg",
    },
    {
      imgPath: "camp.jpg",
    },

  ];

  const slimImages = [
    {
      imgPath: "dance.jpg",
    },
    {
      imgPath: "funny.jpg",
    },
    {
      imgPath: "water.jpg",
    },
    {
      imgPath: "hobbit.jpg",
    },
    {
      imgPath: "landscape.jpg",
      shiftLeft: 600,
    },
    {
      imgPath: "camp2.jpg",
    },
    {
      imgPath: "camp.jpg",
    },
  ];

  const isTablet = useMediaQuery(`(max-width: ${BREAKPOINT_TABTOP}px)`);

  return (
    <Carousel indicators={false} animation="fade" interval={10000}>
      {(isTablet ? slimImages : images).map(({ imgPath, shiftLeft }) => (
        <CarouselStyles key={imgPath} shiftLeft={shiftLeft ? shiftLeft : 0}>
          <img src={`img/carousel/${imgPath}`} title="" alt="" />
        </CarouselStyles>
      ))}
    </Carousel>
  );
};
