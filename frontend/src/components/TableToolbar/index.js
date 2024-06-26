import * as React from "react";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tab, Tabs } from "@mui/material";
import Search from "../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

function TableToolbar(props) {
  const { numSelected, tab, setTab, valueSearch, setValueSearch } = props;
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Box
          sx={{ flex: "1 1 100%", display: "flex" }}
          className="items-center space-x-5"
        >
          <Typography color="inherit" variant="subtitle1" component="div">
            {numSelected} lựa chọn
          </Typography>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Tabs sx={{ flex: "1 1 100%" }} value={tab} onChange={setTab}>
          <Tab sx={{ fontSize: 12 }} label="Tất cả" />
        </Tabs>
      )}

      {isSearch ? (
        <Search
          value={valueSearch}
          setValue={setValueSearch}
          handleClose={() => {
            setValueSearch("");
            setIsSearch(false);
          }}
        />
      ) : (
        <Tooltip title="Search">
          <IconButton onClick={() => setIsSearch(true)}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default TableToolbar;
