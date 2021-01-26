import React from "react";
import styled from "styled-components/macro";
import { lighterPink } from "../constants";
import { useTranslate } from "../utils";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const ScheduleStyles = styled.div`
  background-color: ${lighterPink};
  font-size: 18px;
  height: 100vh;

  .content {
    width: 80%;
    margin: 0 auto;
    padding: 5em 0;
  }

  .title {
    font-size: 56px;
    text-align: center;
    font-family: BrightSunshine;
  }

  .row {
    display: grid;
    grid-template-columns: 10em auto;
    grid-column-gap: 1em;
    padding-bottom: 1em;
    align-items: center;

    .headerIcon {
      display: grid;
      grid-template-columns: 5em auto;
      justify-content: center;
      align-items: center;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 2px solid black;
      width: 50px;
      height: 50px;
    }

    .header {
      font-weight: 700;
    }
  }

  .capacity {
    align-items: flex-start !important;
    padding-bottom: 3em;
  }

  #ring {
    width: 250px;
    height: 250px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    margin: 0em auto;

    img {
      height: auto;
      width: 100%;
      margin-top: -30px;
    }
  }
`;

export default () => {
  return (
    <ScheduleStyles id="schedule">
      <div className="content">
        <div className="title">{useTranslate("schedule")}</div>
        {[
          { header: "date", icon: <EventIcon /> },
          { header: "time", icon: <ScheduleIcon /> },
          { header: "loc", icon: <LocationOnIcon /> },
          { header: "capacity", icon: <EmojiPeopleIcon /> },
        ].map(({ header, icon }) => (
          <div key={header} className={`row ${header}`}>
            <div className="headerIcon">
              <div className="header">{useTranslate(header)}</div>
              <div className="icon">{icon}</div>
            </div>
            <div className="val">{useTranslate(`${header}-val`)}</div>
          </div>
        ))}
        <div id="ring">
          <img src="/img/snow-ring.jpg" title="snowRing" alt="snowRing" />
        </div>
      </div>
    </ScheduleStyles>
  );
};
