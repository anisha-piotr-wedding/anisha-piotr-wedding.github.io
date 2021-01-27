import React from "react";
import styled from "styled-components/macro";
import { lighterPink, red } from "../constants";
import { useTranslate } from "../utils";

const QandAStyles = styled.div`
  /* height: 100vh; */
  background-color: ${lighterPink};
  font-size: 20px;

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
`;

export default () => {
  return (
    <QandAStyles>
      <div className="content">
        <div className="title">{useTranslate("qAndA")}</div>
        {[...Array(4).keys()].map((index) => (
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
