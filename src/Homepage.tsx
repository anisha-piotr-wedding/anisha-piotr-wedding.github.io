import React from "react";
import styled from "styled-components/macro";
import CountdownTimer from "./components/Carousel/CountdownTimer";
import ImageCarousel from "./components/Carousel/ImageCarousel";
import MenuBar from "./components/MenuBar/MenuBar";
import { BREAKPOINT_DESKTOP } from "./constants";

const LOGO_WIDTH = 32;
const LEFT_PERCENT = 60;
const LEFT_PERCENT_SMALL = 100;

const HomepageStyles = styled.div`
  #left {
    position: fixed;
    width: ${LEFT_PERCENT}%;
    height: 100%;
    left: 0px;
    top: 0px;

    .container {
      position: relative;
      text-align: center;
    }
  }

  #right {
    width: ${100 - LEFT_PERCENT}%;
    padding-left: ${LEFT_PERCENT}%;

    button {
      color: black;
    }

    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5em 0;

      img {
        width: ${LOGO_WIDTH}rem;
      }

      #logo-words {
        width: ${LOGO_WIDTH / 2}rem;
        padding-top: 1em;
      }

      .logo-text {
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: ${BREAKPOINT_DESKTOP}px) {
    display: flex;
    flex-direction: column;

    #left {
      width: ${LEFT_PERCENT_SMALL}%;
      height: auto;
      position: relative;
    }

    #right {
      width: ${LEFT_PERCENT_SMALL}%;
      padding-left: 0%;

      .logo {
        padding: 2em 0;
      }
    }
  }
`;

export default () => {
  return (
    <HomepageStyles>
      <div id="left">
        <div className="containter">
          <ImageCarousel />
          <CountdownTimer />
        </div>
      </div>
      <div id="right">
        <MenuBar />
        <div className="logo">
          <img id="logo" src="img/logo.png" title="logo" alt="logo" />
          <img
            id="logo-words"
            src="img/logo-words.png"
            title="logo-words"
            alt="logo-words"
          />
          <div className="logo-text">
            Saturday May 8th, 2021 • 2 O'Clock in the Afternoon
          </div>
          <div style={{ paddingTop: "1400px" }}>TETS</div>
        </div>
      </div>
    </HomepageStyles>
  );
};
