import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, red } from "../constants";
import { useTranslate } from "../utils";

const ContactStyles = styled.div`
  background-image: url("img/contactImg3.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content-container {
    margin: 0 auto;
    width: 80%;

    .content {
      background-color: rgb(255, 255, 255, 0.9);
      border-radius: 20px;
      padding: 2em;
      .title {
        font-size: 56px;
        text-align: center;
        font-family: BrightSunshine;
      }

      .content-text {
        padding: 1em;
        text-align: center;
        font-size: 24px;
      }
    }

    a {
      color: ${red};
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .content-container {
      width: 85%;
      .content {
        padding: 1em 0.5emlocal;

        .content-text {
          font-size: 18px;
        }
      }
    }
  }
`;

export default () => {
  return (
    <ContactStyles id="contact">
      <div className="content-container">
        <div className="content">
          <div className="title">{useTranslate("contact")}</div>
          <div className="content-text">{useTranslate("contact-1")}</div>
        </div>
      </div>
    </ContactStyles>
  );
};
