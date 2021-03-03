import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components/macro";
import { StyleType } from "../Homepage";
import { getIsWindows, useTranslate } from "../utils";

const LivestreamStyles = styled.div<StyleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 80%;
  font-family: ${(props) =>
    props.isPolish ? "PolishFont" : "GlacialIndifference"};

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

export default ({ language }: { language: string }) => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj" || language === "guj";
  const isPolish = location.pathname === "/pl" || language === "pl";

  return (
    <LivestreamStyles
      id="livestream"
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <div className="title">{useTranslate("livestream")}</div>
      <div className="content">{useTranslate("livestream-1")}</div>
    </LivestreamStyles>
  );
};
