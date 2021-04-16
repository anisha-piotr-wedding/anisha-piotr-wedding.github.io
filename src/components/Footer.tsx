import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE } from "../constants";
import { getIsWindows } from "../utils";
import { useLocation } from "react-router";
import { StyleType } from "../Homepage";

const FooterStyles = styled.div<StyleType>`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 0.5em 1em;
  height: 15vh;
  font-family: ${(props) =>
    props.isPolish ? "PolishFont" : "GlacialIndifference"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .createdBy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;

    img {
      width: 40px;
    }
  }

  .iconCredit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
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
    <FooterStyles
      id="footer"
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <div className="createdBy">
        <div>
          <img src="img/ksham-logo.png" alt="ksham-logo" />
        </div>
        <div>© 2021 Kshamina Ghelani</div>
        <div style={{ fontSize: "10px", paddingTop: "5px" }}>
          "We'll get married and we'll wear clothes"
        </div>
      </div>
      <div className="iconCredit">
        <a href="https://www.freevector.com/ganesha-icons-graphics#">
          Icons: FreeVector.com
        </a>
      </div>
    </FooterStyles>
  );
};
