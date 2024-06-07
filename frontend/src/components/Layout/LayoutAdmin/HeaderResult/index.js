import {Button, Toolbar} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";

const HeaderResult = ({ handleClickAdd }) => {
  const [name, setName] = useState("");

  return (
    <>
      <Box sx={{ paddingY: 1 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <TextField
            sx={{ width: 400 }}
            id="outlined-controlled"
            label="Tìm kiếm"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => handleClickAdd()}
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
            >
              Thêm
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default HeaderResult;
