import { Button } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import { PushableButton } from "../../styles";
import { getIsWindows, useTranslate } from "../../utils";

export default () => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj";
  const isPolish = location.pathname === "/pl";

  const href = "https://www.unioneleven.com/anisha-piotr-live";

  return (
    <PushableButton
      isWindows={isWindows}
      isGujarati={isGujarati}
      isPolish={isPolish}
    >
      <Button
        className="pushable"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="front"
          style={{
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          <div> {useTranslate("popup-link")}</div>
          <span id="icon" role="img" aria-label="ring">
            💍
          </span>
        </div>
      </Button>
    </PushableButton>
  );
};
