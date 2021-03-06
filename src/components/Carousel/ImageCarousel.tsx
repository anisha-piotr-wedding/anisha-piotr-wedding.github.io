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
    {
      imgPath: "img/carousel/hobbit.jpg",
      title: "test",
      subTitle: "subTest",
    },
    {
      imgPath: "img/carousel/landscape.jpg",
      title: "test",
      subTitle: "subTest",
      shiftLeft: 500,
    },
    {
      imgPath: "img/carousel/derp.jpg",
      title: "test",
      subTitle: "subTest",
    },
    {
      imgPath: "img/carousel/ringLandscape.jpg",
      title: "test",
      subTitle: "subTest",
      shiftLeft: 180,
    },
    {
      imgPath: "img/carousel/train.jpg",
      title: "test",
      subTitle: "subTest",
      shiftLeft: -200,
    },
    {
      imgPath: "img/carousel/snow_scene.jpg",
      title: "test",
      subTitle: "subTest",
    },
  ];

  const slimImages = [
    {
      imgPath: "img/carousel/dance.jpg",
      title: "test2",
      subTitle: "subTest2",
    },
    {
      imgPath: "img/carousel/funny.jpg",
      title: "test",
      subTitle: "subTest",
    },
    {
      imgPath: "img/carousel/hobbit.jpg",
      title: "test",
      subTitle: "subTest",
    },
    {
      imgPath: "img/carousel/landscape.jpg",
      title: "test",
      subTitle: "subTest",
      shiftLeft: 600,
    },
    {
      imgPath: "img/carousel/snow_scene.jpg",
      title: "test",
      subTitle: "subTest",
      shiftLeft: -400,
    },
  ];

  const isTablet = useMediaQuery(`(max-width: ${BREAKPOINT_TABTOP}px)`);

  return (
    <Carousel indicators={false} animation="fade" interval={10000}>
      {(isTablet ? slimImages : images).map(({ imgPath, title, shiftLeft }) => (
        <CarouselStyles key={title} shiftLeft={shiftLeft ? shiftLeft : 0}>
          <img src={imgPath} title={title} alt={title} />
        </CarouselStyles>
      ))}
    </Carousel>
  );
};
