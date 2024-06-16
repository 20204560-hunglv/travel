import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { Button, Dialog } from "@mui/material";
import * as React from "react";

function DialogCustom({
  message,
  onDialog,
  nameProduct,
  handleCloseDialog,
  openDialog,
  handleClickAgree,
}) {
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleCloseDialog}>
          Hủy
        </Button>
        <Button
          onClick={() => {
            handleClickAgree();
          }}
          autoFocus
        >
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogCustom;
