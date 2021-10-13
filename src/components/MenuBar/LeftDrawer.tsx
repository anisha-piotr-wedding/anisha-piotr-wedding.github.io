import React, { Dispatch, SetStateAction } from "react";
import { SwipeableDrawer } from "@material-ui/core";
import styled from "styled-components/macro";
import { lightPink } from "../../constants";
import { Link as ScrollLink } from "react-scroll";
import { useTranslate } from "../../utils";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const DRAWER_WIDTH = 200;

const LeftDrawerStyles = styled.div`
  width: ${DRAWER_WIDTH}px;
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  align-items: center;

  #logo-home {
    display: flex;
    justify-content: center;

    img {
      width: 35%;
      padding-bottom: 2em;
      cursor: pointer;
    }
  }

  .menuItem {
    text-decoration: none;
    color: black;
    font-size: 18px;
    padding-bottom: 0.5em;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
      background-color: ${lightPink} !important;
    }
  }
`;

export default ({
  open,
  setIsDrawerOpen,
}: {
  open: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const closeDrawer = () => setIsDrawerOpen(false);
  const openDrawer = () => setIsDrawerOpen(true);

  const location = useLocation();

  const isPolish = location.pathname === "/pl";
  const isGujarati = location.pathname === "/guj";

  const isHome = location.pathname === "/" || isPolish || isGujarati;
  const path = isPolish ? "pl" : isGujarati ? "guj" : "";

  const menuItemsList = isHome
    ? ["schedule", "livestream", "qAndA", "contact"]
    : [];
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={closeDrawer}
      onOpen={openDrawer}
      className="drawer"
    >
      <LeftDrawerStyles>
        {isHome ? (
          <ScrollLink
            to="home"
            smooth={true}
            id="logo-home"
            duration={100}
            onClick={closeDrawer}
          >
            <img src="img/logo_small.png" title="Home" alt="Home" />
          </ScrollLink>
        ) : (
          <Link
            id="logo-home"
            to={{
              pathname: `/${path}`,
            }}
          >
            <img src="img/logo_small.png" title="Home" alt="Home" />
          </Link>
        )}
        {menuItemsList.map((item) => {
          const menuTitle = useTranslate(item);
          return (
            <div key={item} className="menuItem">
              <ScrollLink to={item} smooth={true} onClick={closeDrawer}>
                {menuTitle}
              </ScrollLink>
            </div>
          );
        })}
      </LeftDrawerStyles>
    </SwipeableDrawer>
  );
};
