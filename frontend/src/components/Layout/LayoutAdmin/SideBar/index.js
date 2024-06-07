import {useLocation, useNavigate} from "react-router-dom";
import {Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import TourIcon from '@mui/icons-material/Tour';
import {useState} from "react";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HotelIcon from '@mui/icons-material/Hotel';
import DiscountIcon from '@mui/icons-material/Discount';
import ShopIcon from '@mui/icons-material/Shop';

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
          <ListItemText primary="Khách hàng" />
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
        <ListItemButton
          selected={selectedNav === "/admin/crud-guide"}
          onClick={(event) => handleListItemClick(event, "/admin/crud-guide")}
        >
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Hướng dẫn viên" />
        </ListItemButton>
        <ListItemButton
          selected={selectedNav === "/admin/crud-hotel"}
          onClick={(event) => handleListItemClick(event, "/admin/crud-hotel")}
        >
          <ListItemIcon>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="Khách sạn" />
        </ListItemButton>
        <ListItemButton
          selected={selectedNav === "/admin/crud-discount"}
          onClick={(event) => handleListItemClick(event, "/admin/crud-discount")}
        >
          <ListItemIcon>
            <DiscountIcon />
          </ListItemIcon>
          <ListItemText primary="Khuyến mãi" />
        </ListItemButton>
        <ListItemButton
          selected={selectedNav === "/admin/crud-order"}
          onClick={(event) => handleListItemClick(event, "/admin/crud-order")}
        >
          <ListItemIcon>
            <ShopIcon />
          </ListItemIcon>
          <ListItemText primary="Tour đã đặt" />
        </ListItemButton>
      </List>
    </Box>
  );
};
export default SideBar;
