import React from "react";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE } from "../../constants";

const CountdownStyles = styled.div`
  #countdown {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    width: 25em;
    padding: 1.5em 0;

    .text {
      display: grid;
      grid-template-columns: repeat(4, 5em);
      grid-template-rows: repeat(2, auto);
      justify-items: center;

      .time {
        font-size: 32px;
      }
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    #countdown {
      top: 100%;
      width: 100%;
      padding: 15px 0;
      height: 50px;

      .text {
        .time {
          font-size: 24px;
        }
      }
    }
  }
`;

const WEDDING_TIME_MS = 1624215600000;

export default () => {
  const { t } = useTranslation("Translate");
  const useRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    return completed ? (
      <div id="countdown" style={{ fontSize: "24px" }}>
        It's time to get married!
      </div>
    ) : (
      <div id="countdown">
        <div className="text">
          <div className="time">{days}</div>
          <div className="time">{hours}</div>
          <div className="time">{minutes}</div>
          <div className="time">{seconds}</div>
          <div className="name">{t("days")}</div>
          <div className="name">{t("hours")}</div>
          <div className="name">{t("minutes")}</div>
          <div className="name">{t("seconds")}</div>
        </div>
        {/* {days} days {hours} hours {minutes} minutes {seconds} seconds left! */}
      </div>
    );
  };
  return (
    <CountdownStyles>
      <Countdown date={WEDDING_TIME_MS} renderer={useRenderer} />
    </CountdownStyles>
  );
};
