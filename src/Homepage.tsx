import React from "react";
import styled from "styled-components/macro";
import CountdownTimer from "./components/Carousel/CountdownTimer";
import ImageCarousel from "./components/Carousel/ImageCarousel";
import MenuBar from "./components/MenuBar/MenuBar";
import Schedule from "./components/Schedule";
import { BREAKPOINT_DESKTOP, lighterPink } from "./constants";
import { useTranslate } from "./utils";

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
      justify-content: flex-start;
      align-items: center;
      height: 100vh;

      img {
        margin: 5em 0 0;
        width: ${LOGO_WIDTH}rem;
      }

      #logo-words {
        margin: 0;
        width: ${LOGO_WIDTH / 2}rem;
        padding-top: 1em;
      }

      .logo-text {
        text-transform: uppercase;
        padding: 1em 0 2em;
        font-size: 18px;
      }
    }

    hr {
      border-top: 1px solid grey;
      width: 75%;
      margin-top: 3em;
    }

    .welcome-container {
      padding: 2em;
      background-color: ${lighterPink};
      border-radius: 20px;
      width: 25em;
    }

    .welcome {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-row-gap: 2em;
      text-align: center;
      font-size: 18px;
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
          <div className="logo-text">{useTranslate("home-date")}</div>
          <div className="welcome-container">
            <div className="welcome">
              <div>{useTranslate("welcome-1")}</div>
              <div>{useTranslate("welcome-2")}</div>
            </div>
          </div>
        </div>
        <Schedule />
      </div>
    </HomepageStyles>
  );
};
