import React, { useState } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import LanguageSelector from "./LanguageSelector";
import MenuIcon from "@material-ui/icons/Menu";
import LeftDrawer from "./LeftDrawer";
import styled from "styled-components/macro";

const MenuBarStyles = styled(AppBar)`
  display: flex;
  img {
    width: 30%;
    margin: 0 auto;
  }
`;

export default () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <MenuBarStyles
      id="MenuBarStyles"
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
        {/* <img id="logo" src="img/logo.png" title="logo" alt="logo" /> */}
        <LanguageSelector />
      </Toolbar>
    </MenuBarStyles>
  );
};
