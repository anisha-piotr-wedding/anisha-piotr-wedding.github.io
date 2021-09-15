import React from "react";
import { Redirect, useLocation } from "react-router";
import { getIsAuthenticated, getIsWindows } from "./utils";

export default function InPersonInvite({ language }: { language: string }) {
  const isAuthenticated = getIsAuthenticated();
  const location = useLocation();
  const isWindows = getIsWindows();
  console.log("🌟🚨 ~ InPersonInvite ~ isWindows", isWindows);
  const isPolish = location.pathname === "/pl" || language === "pl";

  if (!isAuthenticated) {
    const pathString = isPolish ? "/pl/invite" : "/invite";
    return <Redirect to={pathString} />;
  }

  return <div>YES</div>;
}
