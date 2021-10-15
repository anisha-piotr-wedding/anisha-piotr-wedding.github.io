import React from "react";
import { getIsWindows, useTranslate } from "../../utils";
import styled from "styled-components/macro";
import { StyleType } from "../../styles";
import { useLocation } from "react-router";
import LivestreamButton from "./LivestreamButton";
import CountdownTimer from "../Carousel/CountdownTimer";
import { BREAKPOINT_MOBILE } from "../../constants";

const LivestreamContentStyles = styled.div<StyleType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 3em 1em;

  .text {
    font-size: ${(props) => (props.isWindows ? 18 : 20)}px !important;
    font-family: ${(props) =>
      props.isPolish ? "PolishFont" : "GlacialIndifference"};
    text-align: center;
  }

  .text1 {
    padding-bottom: 1em;
  }
  .text2 {
    padding: 2em 0 1em;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 1em;

    .text {
      font-size: 18px !important;
    }

    .text2 {
      padding: 1em 0;
    }
  }
`;

const CountdownPopupStyles = styled.div<StyleType>`
  #countdown {
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
      padding: 1em 0;
      width: 90%;
      overflow-x: hidden;
      margin: 0 auto;
      .text {
        grid-template-columns: repeat(4, 4em);
        .time {
          font-size: 24px;
        }
        .name {
          font-size: ${(props) => (props.isPolish ? 14 : 16)}px !important;
        }
      }
    }
  }
`;

export default ({
  includeCountdown = true,
}: {
  includeCountdown?: boolean;
}) => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj";
  const isPolish = location.pathname === "/pl";

  return (
    <LivestreamContentStyles
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <div className="text text1">{useTranslate("popup-1")}</div>
      <LivestreamButton />
      {includeCountdown && (
        <div>
          <div className="text text2">{useTranslate("popup-2")}</div>
          <CountdownPopupStyles
            isWindows={isWindows}
            isGujarati={isGujarati}
            isPolish={isPolish}
          >
            <CountdownTimer />
          </CountdownPopupStyles>
        </div>
      )}
    </LivestreamContentStyles>
  );
};
