import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import styled from "styled-components/macro";
import { camelCase } from "lodash";
import LanguageSelector from "./LanguageSelector";

// Days together
// countown

const APP_BAR_HEIGHT = 50;

const menuItemsList = ["Schedule", "Livestream", "COVID-19", "Contact Us"];

const HomepageStyles = styled.div<{ numColumns: number }>`
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em 0;

    img {
      width: 50%;
    }

    #logo-words {
      width: 25%;
      padding-top: 1em;
    }
  }

  #appBar {
    height: ${APP_BAR_HEIGHT}px;
  }

  #header {
    margin-top: -${APP_BAR_HEIGHT}px;
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(${(props) => props.numColumns + 2}, auto);
    grid-column-gap: 2em;
  }

  .menuItem {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`;

export default () => {
  return (
    <HomepageStyles numColumns={menuItemsList.length}>
      <div className="logo">
        <img id="logo" src="img/logo.png" title="logo" alt="logo" />
        <img
          id="logo-words"
          src="img/logo-words.png"
          title="logo-words"
          alt="logo-words"
        />
      </div>
      <AppBar
        id="appBar"
        position="sticky"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar id="toolbar">
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
          {/* TODO add icon */}
          <div className="menu">
            <div className="menuItem">Home</div>
            {menuItemsList.map((item) => (
              <a href={`#${camelCase(item)}`} className="menuItem">
                {item}
              </a>
            ))}
            <LanguageSelector />
          </div>
        </Toolbar>
      </AppBar>
      <img
        id="header"
        src="img/header.jpg"
        title="header"
        alt="header"
        width="100%"
      />
      <div style={{ paddingTop: "1400px" }}>fkdkslfjsdklfj</div>
    </HomepageStyles>
  );
};
