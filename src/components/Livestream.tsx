import React from "react";
import styled from "styled-components/macro";
import { useTranslate } from "../utils";

const QandAStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 80%;

  .title {
    padding: 4em 0 0;
    font-size: 56px;
    text-align: center;
    font-family: BrightSunshine;
  }

  .content {
    padding: 1em;
    text-align: center;
    font-size: 24px;
  }
`;

export default () => {
  return (
    <QandAStyles>
      <div className="title">{useTranslate("livestream")}</div>
      <div className="content">{useTranslate("livestream-1")}</div>
    </QandAStyles>
  );
};
