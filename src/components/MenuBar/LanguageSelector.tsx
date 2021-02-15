import React, { useEffect, useState } from "react";
import { IconButton, MenuItem, Menu, Tooltip } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useHistory, useLocation } from "react-router-dom";

const getLanguages = () => ({
  en: "English",
  pl: "Polski",
  guj: "Gujarati",
});

export const getCurrentLanguage = () => {
  return (
    i18n.language ||
    (typeof window !== "undefined" && window.localStorage.i18nextLng) ||
    "en"
  );
};

const LanguageSelector = ({ language }: { language: string }) => {
  const LANGUAGES = getLanguages();
  const { i18n } = useTranslation();
  const location = useLocation();
  const history = useHistory();

  const isPolish = location.pathname === "/pl" || language === "pl";
  const isGujarati = location.pathname === "/guj" || language === "guj";

  const [, setLang] = useState(
    isPolish || isGujarati ? i18n.languages[1] : i18n.language
  );

  /* Used to set position of Material UI Menu */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClickLanguageSelector(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  async function handleMenuItemClick(id: string) {
    await i18n.changeLanguage(id);

    setLang(id);
    history.push(id === "en" ? "" : id);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    let id = "en";
    if (isPolish || isGujarati) {
      id = language;
    } else {
      history.push("/");
    }
    i18n.changeLanguage(id);
    setAnchorEl(null);

    return () => {
      i18n.changeLanguage("en");
      setLang("en");
      setAnchorEl(null);
    };
  }, [isPolish, isGujarati, language, history, i18n]);

  const isSelected = (id: string) =>
    id === "en" ? location.pathname === "/" : `/${id}` === location.pathname;

  return (
    <>
      <Tooltip title="Language">
        <IconButton
          onClick={handleClickLanguageSelector}
          aria-label="select language"
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="menu-language"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {Object.entries(LANGUAGES).map(([id, name]) => (
          <MenuItem
            key={id}
            value={id}
            selected={isSelected(id)}
            onClick={async () => await handleMenuItemClick(id)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
