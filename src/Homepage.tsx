import React from "react";
import styled from "styled-components/macro";
import CountdownTimer from "./components/Carousel/CountdownTimer";
import ImageCarousel from "./components/Carousel/ImageCarousel";
import MenuBar from "./components/MenuBar/MenuBar";
import Schedule from "./components/Schedule";
import Livestream from "./components/Livestream";
import QandA from "./components/QandA";
import Contact from "./components/Contact";
import { BREAKPOINT_MOBILE, lighterPink } from "./constants";
import { useTranslate } from "./utils";
import { useLocation } from "react-router";

const LOGO_WIDTH = 32;
const LEFT_PERCENT = 60;
const LEFT_PERCENT_SMALL = 100;

const HomepageStyles = styled.div<{ isGujarati: boolean }>`
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
      font-size: ${(props) => (props.isGujarati ? 28 : 18)}px;
      font-weight: ${(props) => (props.isGujarati ? 200 : 400)}px;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
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
      margin-top: 40px;

      .logo {
        padding: 0em 0;

        img {
          margin: 1.5em 0 0;
          width: 90%;
        }

        #logo-words {
          width: 55%;
        }

        .logo-text {
          padding: 2em;
          text-align: center;
        }
      }

      .welcome-container {
        padding: 1em;
        width: 80%;
      }
    }
  }
`;

export default () => {
  const location = useLocation();
  const isGujarati = location.pathname === "/guj";

  return (
    <HomepageStyles id="home" isGujarati={isGujarati}>
      <div id="left">
        <div className="container">
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
        <Livestream />
        <QandA />
        <Contact />
      </div>
    </HomepageStyles>
  );
};
