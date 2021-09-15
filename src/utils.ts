import { useTranslation } from "react-i18next";
const { detect } = require("detect-browser");

export const useTranslate = (property: string) => {
  const { t } = useTranslation("Translate");
  return t(property, { postProcess: "markdown-jsx" });
};

export const getIsWindows = () => {
  const { os } = detect();
  return os.includes("Windows");
};

export function getIsAuthenticated() {
  const inviteCode = localStorage.getItem("inviteCode");
  return inviteCode === "TEST";
}
