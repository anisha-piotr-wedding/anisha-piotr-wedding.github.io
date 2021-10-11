import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components/macro";
import { BREAKPOINT_TABTOP, lighterPink, lightPink } from "./constants";
import { StyleType } from "./styles";
import { getIsAuthenticated, getIsWindows, useTranslate } from "./utils";

const InviteStyles = styled.div<StyleType>`
  background-color: ${lighterPink};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) =>
    props.isPolish ? "PolishFont" : "GlacialIndifference"};

  .form {
    width: 60%;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-column-gap: 1em;
    justify-content: center;

    input {
      background-color: "white";
      color: "white";
    }

    .submit {
      font-family: ${(props) =>
        props.isPolish ? "PolishFont" : "GlacialIndifference"};

      .pushable {
        background: ${lighterPink};
        border-radius: 12px;
        border: none;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
      }
      .front {
        display: block;
        padding: 12px 42px;
        border-radius: 12px;
        font-size: ${(props) => (props.isWindows ? 16 : 18)}px;
        background: ${lightPink};
      }

      .pushable:active .front {
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: ${BREAKPOINT_TABTOP}px) {
    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 300px;
      }

      .submit {
        padding-top: 1em;
      }
    }
  }
`;

export default function Invite({ language }: { language: string }) {
  const location = useLocation();
  const history = useHistory();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj" || language === "guj";
  const isPolish = location.pathname === "/pl" || language === "pl";
  const isAuthenticated = getIsAuthenticated();
  const isCodeTried = localStorage.getItem("inviteCode") !== null;

  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(
    Boolean(isCodeTried && !isAuthenticated)
  );

  const onSubmit = () => {
    if (inviteCode) {
      localStorage.setItem("inviteCode", inviteCode);
      setError(Boolean(inviteCode !== null && !isAuthenticated));
    }
    const pathString = isPolish ? "/pl/details" : "/details";
    history.push({ pathname: pathString, state: { language } });
  };

  return (
    <InviteStyles
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <form className="form" noValidate onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label={useTranslate("invite-code")}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "12px",
          }}
          onChange={(event) => setInviteCode(event.target.value)}
          error={error}
          helperText={error ? "Incorrect code." : ""}
        />
        <div className="submit">
          <Button className="pushable" type="submit" disableRipple={true}>
            <span className="front">{useTranslate("submit")}</span>
          </Button>
        </div>
      </form>
    </InviteStyles>
  );
}
