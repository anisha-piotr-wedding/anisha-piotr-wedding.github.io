import React, { useState } from "react";
import CountdownTimer, {
  CountdownStyles,
} from "./components/Carousel/CountdownTimer";
import ImageCarousel from "./components/Carousel/ImageCarousel";
import MenuBar from "./components/MenuBar/MenuBar";
import Schedule from "./components/Schedule";
import Livestream from "./components/Livestream/Livestream";
import QandA from "./components/QandA";
import Contact from "./components/Contact";
import LivestreamPopup from "./components/Livestream/LivestreamPopup";
import { getIsAuthenticated, getIsWindows, useTranslate } from "./utils";
import { useHistory, useLocation } from "react-router";
import { Button } from "@material-ui/core";
import { HomepageStyles, PushableButton } from "./styles";

export default ({ language }: { language: string }) => {
  const location = useLocation();
  const history = useHistory();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj" || language === "guj";
  const isPolish = location.pathname === "/pl" || language === "pl";

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  function goToInvitePage() {
    const isAuthenticated = getIsAuthenticated();
    const path = isAuthenticated ? "details" : "invite";
    const pathString = isPolish ? `/pl/${path}` : `/${path}`;
    history.push({ pathname: pathString, state: { language } });
  }

  return (
    <HomepageStyles
      id="home"
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <LivestreamPopup {...{ open, handleClose }} />
      <div id="left">
        <div className="container">
          <ImageCarousel />
          <CountdownStyles>
            <CountdownTimer />
          </CountdownStyles>
        </div>
      </div>
      <div id="right">
        <MenuBar language={language} />
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
              {isGujarati && (
                <img
                  id="Ganesh"
                  src="img/Ganesh_Icon.png"
                  alt="Ganesh"
                  title="Ganesh"
                />
              )}
              <div>{useTranslate("welcome-1")}</div>
              <div>{useTranslate("welcome-2")}</div>
              <a href="https://www.instagram.com/explore/tags/marryingmorchat/">
                #marryingmorchat
              </a>
            </div>
          </div>
          {!isPolish && !isGujarati && (
            <PushableButton
              isWindows={isWindows}
              isGujarati={isGujarati}
              isPolish={isPolish}
            >
              <Button
                className="pushable"
                disableRipple={true}
                onClick={goToInvitePage}
              >
                <span className="front">{useTranslate("in-person")}</span>
              </Button>
            </PushableButton>
          )}
        </div>
        <Schedule language={language} />
        <Livestream language={language} />
        <QandA language={language} />
        <Contact language={language} />
      </div>
    </HomepageStyles>
  );
};
