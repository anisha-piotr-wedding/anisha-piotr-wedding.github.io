import React, { useState } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import LanguageSelector from "./LanguageSelector";
import MenuIcon from "@material-ui/icons/Menu";
import LeftDrawer from "./LeftDrawer";

export default () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar
      id="appBar"
      position="sticky"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton
          id="menu"
          edge="start"
          color="inherit"
          aria-label="Menu"
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <LeftDrawer open={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <div id="spacer" />
        <LanguageSelector />
      </Toolbar>
    </AppBar>
  );
};
