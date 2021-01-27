import React, { Dispatch, SetStateAction } from "react";
import { SwipeableDrawer } from "@material-ui/core";
import styled from "styled-components/macro";
import { lightPink } from "../../constants";
import { useTranslation } from "react-i18next";

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
    }
  }

  .menuItem {
    text-decoration: none;
    color: black;
    font-size: 18px;
    padding-bottom: 0.5em;
    text-transform: uppercase;

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

  const menuItemsList = ["schedule", "livestream", "qAndA", "contact"];
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={closeDrawer}
      onOpen={openDrawer}
      className="drawer"
    >
      <LeftDrawerStyles>
        <a href="/" id="logo-home">
          <img src="img/logo_small.png" title="logo-small" alt="logo-small" />
        </a>
        {menuItemsList.map((item) => (
          <a href={`#${item}`} className="menuItem" key="item">
            {useTranslation(item)}
          </a>
        ))}
      </LeftDrawerStyles>
    </SwipeableDrawer>
  );
};
