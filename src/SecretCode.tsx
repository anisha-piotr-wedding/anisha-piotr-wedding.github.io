import React from "react";
import { Redirect, useLocation } from "react-router";

export default function SecretCode({ language }: { language: string }) {
  const location = useLocation();
  const isPolish = location.pathname === "/pl" || language === "pl";
  const inviteCode = process.env.REACT_APP_INVITE_CODE as string;
  console.log("🌟🚨 ~ SecretCode ~ inviteCode", inviteCode);
  localStorage.setItem("inviteCode", inviteCode);

  const pathString = isPolish ? "/pl/details" : "/details";
  return <Redirect to={pathString} />;
}
