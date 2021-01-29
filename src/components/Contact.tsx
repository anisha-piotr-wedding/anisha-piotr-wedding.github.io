import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, red } from "../constants";
import { useTranslate } from "../utils";

const ContactStyles = styled.div`
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

  a {
    color: ${red};
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 2em 0 0;
  }
`;

export default () => {
  return (
    <ContactStyles id="contact">
      <div className="title">{useTranslate("contact")}</div>
      <div className="content">{useTranslate("contact-1")}</div>
    </ContactStyles>
  );
};
