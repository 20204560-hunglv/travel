import { Button, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const HeaderResult = ({ handleClickAdd, title = "" }) => {
  return (
    <>
      <Box sx={{ paddingX: 0 }}>
        <Toolbar sx={{ paddingX: 0 }}>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            fontWeight="bold"
            component="div"
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              size="small"
              onClick={() => handleClickAdd()}
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              sx={{
                textTransform: "none",
              }}
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
