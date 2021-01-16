import { useTranslation } from "react-i18next";

export const useTranslate = (property: string) => {
  const { t } = useTranslation("Translate");
  return t(property, { postProcess: "markdown-jsx" });
};
