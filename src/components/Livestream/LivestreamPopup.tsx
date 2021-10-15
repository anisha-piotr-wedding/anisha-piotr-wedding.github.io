import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { getIsWindows } from "../../utils";
import styled from "styled-components/macro";
import { StyleType } from "../../styles";
import { useLocation } from "react-router";
import LivestreamContent from "./LivesteamContent";

const LivestreamPopupStyles = styled.div<StyleType>``;

export default ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const location = useLocation();
  const isWindows = getIsWindows();
  const isGujarati = location.pathname === "/guj";
  const isPolish = location.pathname === "/pl";

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <LivestreamPopupStyles
        isWindows={isWindows}
        isGujarati={isGujarati}
        isPolish={isPolish}
      >
        <MuiDialogContent dividers>
          <LivestreamContent />
        </MuiDialogContent>
        <MuiDialogActions>
          <IconButton autoFocus onClick={handleClose} color="primary">
            <CloseIcon />
          </IconButton>
        </MuiDialogActions>
      </LivestreamPopupStyles>
    </Dialog>
  );
};
