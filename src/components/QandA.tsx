import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, lighterPink, red } from "../constants";
import { StyleType } from "../Homepage";
import { getIsWindows, useTranslate } from "../utils";

const QandAStyles = styled.div<StyleType>`
  background-color: ${lighterPink};
  font-size: ${(props) => (props.isWindows ? 16 : 20)}px;
  font-family: ${(props) =>
    props.isPolish ? "PolishFont" : "GlacialIndifference"};

  .content {
    width: 80%;
    margin: 0 auto;
    padding: 5em 0;
  }

  .title {
    font-size: 56px;
    text-align: center;
    font-family: ${(props) =>
      props.isPolish ? "PolishTitle" : "BrightSunshine"};
  }

  .question {
    padding-bottom: 1em;
  }

  .question,
  .answer {
    display: grid;
    grid-template-columns: 3em auto;
  }

  .header {
    font-family: BrightSunshine;
    font-size: 32px;
    align-self: center;
  }

  .qAndA {
    padding: 2em 0;
    border-bottom: 1px solid black;
  }

  a {
    color: ${red};
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
  }
`;

export default ({ language }: { language: string }) => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj" || language === "guj";
  const isPolish = location.pathname === "/pl" || language === "pl";

  return (
    <QandAStyles
      id="qAndA"
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <div className="content">
        <div className="title">{useTranslate("qAndA")}</div>
        {[...Array(5).keys()].map((index) => (
          <div className="qAndA" key={index}>
            <div className="question">
              <div className="header">{useTranslate("q")}</div>
              <div>{useTranslate(`q${index + 1}`)}</div>
            </div>
            <div className="answer">
              <div className="header">{useTranslate("a")}</div>
              <div>{useTranslate(`a${index + 1}`)}</div>
            </div>
          </div>
        ))}
      </div>
    </QandAStyles>
  );
};
