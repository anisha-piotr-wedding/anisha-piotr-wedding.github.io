import React from "react";
import styled from "styled-components/macro";
import { lighterPink } from "../constants";
import { useTranslate } from "../utils";

const ScheduleStyles = styled.div`
  background-color: ${lighterPink};
  font-size: 18px;
  height: 100vh;

  .content {
    width: 80%;
    margin: 0 auto;
    padding: 5em 0;
  }

  .title {
    font-size: 32px;
    padding-bottom: 1em;
    text-align: center;
  }

  .row {
    display: grid;
    grid-template-columns: 6em auto;
    padding-bottom: 1em;

    .header {
      font-weight: 700;
    }
  }
`;

export default () => {
  return (
    <ScheduleStyles id="schedule">
      <div className="content">
        <div className="title">{useTranslate("schedule")}</div>
        {["date", "time", "loc", "capacity"].map((item) => (
          <div className="row">
            <div className="header">{useTranslate(item)}</div>
            <div className="val">{useTranslate(`${item}-val`)}</div>
          </div>
        ))}
      </div>
    </ScheduleStyles>
  );
};
