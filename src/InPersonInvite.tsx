import React from "react";
import { getIsAuthenticated } from "./utils";

export default function InPersonInvite({ language }: { language: string }) {
  const isAuthenticated = getIsAuthenticated();
  return isAuthenticated ? <div>YES</div> : <div>NO</div>;
}
