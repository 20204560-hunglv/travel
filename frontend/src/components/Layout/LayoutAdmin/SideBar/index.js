import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import TourIcon from '@mui/icons-material/Tour';
import { useState } from "react";

const SideBar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const [selectedNav, setSelectedNav] = useState(location.pathname);

  const handleListItemClick = (event, pathName) => {
    setSelectedNav(pathName);
    navigate(pathName)
  };
  
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="nav admin">
        <ListItemButton
          selected={selectedNav === "/admin/crud-user"}
          onClick={(event) => handleListItemClick(event, "/admin/crud-user")}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Người dùng" />
        </ListItemButton>
        <ListItemButton
          selected={selectedNav === "/admin/crud-tour"}
          onClick={(event) => handleListItemClick(event, "/admin/crud-tour")}
        >
          <ListItemIcon>
            <TourIcon />
          </ListItemIcon>
          <ListItemText primary="Tour" />
        </ListItemButton>
      </List>
    </Box>
  );
};
export default SideBar;
