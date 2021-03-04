import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, red } from "../constants";
import { StyleType } from "../Homepage";
import { getIsWindows, useTranslate } from "../utils";
import Footer from "./Footer";

const ContactStyles = styled.div<StyleType>`
  background-image: url("img/contactImg3.jpg");
  background-size: cover;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: ${(props) =>
    props.isPolish ? "PolishFont" : "GlacialIndifference"};

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
        font-family: ${(props) =>
          props.isPolish ? "PolishTitle" : "BrightSunshine"};
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

export default ({ language }: { language: string }) => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj" || language === "guj";
  const isPolish = location.pathname === "/pl" || language === "pl";
  return (
    <>
      <ContactStyles
        id="contact"
        isWindows={isWindows}
        isGujarati={isGujarati}
        isPolish={isPolish}
      >
        <div className="content-container">
          <div className="content">
            <div className="title">{useTranslate("contact")}</div>
            <div className="content-text">{useTranslate("contact-1")}</div>
          </div>
        </div>
      </ContactStyles>
      <Footer language={language} />
    </>
  );
};
