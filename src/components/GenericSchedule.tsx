import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, BREAKPOINT_TABTOP } from "../constants";
import { useTranslate } from "../utils";
import { getIsWindows } from "../utils";
import { useLocation } from "react-router";
import { StyleType } from "../styles";

const ScheduleStyles = styled.div<StyleType>`
  font-size: ${(props) => (props.isWindows ? 15 : 18)}px;
  font-family: ${(props) =>
    props.isPolish ? "PolishFont" : "GlacialIndifference"};

  .content {
    width: ${(props) => (props.isWindows ? 93 : 85)}%;
    margin: 0 auto;
  }

  .title {
    font-size: ${(props) => (props.isWindows ? 50 : 56)}px;
  }

  .row {
    display: grid;
    grid-template-columns: ${(props) => (props.isWindows ? 9 : 10)}em auto;
    grid-column-gap: ${(props) => (props.isWindows ? "10px" : "1em")};
    padding-bottom: ${(props) => (props.isWindows ? "10px" : "1em")};
    align-items: center;

    .headerIcon {
      display: grid;
      grid-template-columns: 6em auto;
      justify-content: center;
      align-items: center;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 2px solid black;
      width: ${(props) => (props.isWindows ? 35 : 50)}px;
      height: ${(props) => (props.isWindows ? 35 : 50)}px;
    }

    .header {
      font-weight: 700;
    }
  }

  .capacity {
    align-items: flex-start !important;
    padding-bottom: ${(props) => (props.isWindows ? 1 : 2)}em;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    font-size: 14px;

    .content {
      width: 95%;
      padding: 3em 0;
    }

    .title {
      font-size: 50px;
    }

    .row {
      grid-template-columns: 8em auto;
      grid-column-gap: 10px;
      padding-bottom: 10px;

      .icon {
        width: 28px;
        height: 28px;
        .MuiSvgIcon-root {
          font-size: 1.3rem !important;
        }
      }
    }

    .capacity {
      align-items: flex-start !important;
      padding-bottom: 1em;
    }

    #ring {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: ${BREAKPOINT_TABTOP}px) {
    .content {
      width: 95%;
      padding: 3em 0;
    }

    .row {
      grid-template-columns: 9em auto;
      grid-column-gap: 15px;
      padding-bottom: 10px;

      .headerIcon {
        grid-template-columns: 5em auto;
      }

      .icon {
        width: 32px;
        height: 32px;
        .MuiSvgIcon-root {
          font-size: 1.5rem !important;
        }
      }
    }

    .capacity {
      align-items: flex-start !important;
      padding-bottom: 1em;
    }
  }
`;

export default ({
  language,
  items,
}: {
  language: string;
  items: { header: string; text?: string; icon: any }[];
}) => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj" || language === "guj";
  const isPolish = location.pathname === "/pl" || language === "pl";

  return (
    <ScheduleStyles
      id="schedule"
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <div className="content">
        <div className="title">{useTranslate("schedule")}</div>
        {items.map(({ header, text, icon }) => (
          <div key={header} className={`row ${header}`}>
            <div className="headerIcon">
              <div className="header">{useTranslate(header)}</div>
              <div className="icon">{icon}</div>
            </div>
            <div className="val">
              {text ? text : useTranslate(`${header}-val`)}
            </div>
          </div>
        ))}
      </div>
    </ScheduleStyles>
  );
};
