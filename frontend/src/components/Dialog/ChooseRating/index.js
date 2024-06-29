import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { Button, Dialog, Rating, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { handleNotify } from "../../Notification";
import checkRating from "../../../services/validates/CheckRating";

function ChooseRating({ handleCloseDialog, openDialog, handleClickAgree }) {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");

  const handleSave = () => {
    try {
      checkRating(rate, review);
      handleClickAgree({
        rate,
        review,
      });
      handleCloseDialog();
    } catch (error) {
      handleNotify("warning", "", error.message);
    }
  };
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>{"Đánh giá"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="flex flex-col space-y-4">
            <Rating
              value={rate}
              onChange={(event, newValue) => {
                setRate(newValue);
              }}
            />
            <div>
              <Typography variant="subtitle1">Nhận xét</Typography>
              <TextField
                sx={{ width: "300px" }}
                size="small"
                multiline
                value={review}
                onChange={(event) => setReview(event.target.value)}
              />
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleCloseDialog}>
          Hủy
        </Button>
        <Button
          onClick={() => {
            handleSave();
          }}
          autoFocus
        >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ChooseRating;
