import SideBar from "./SideBar";
import Search from "./Search";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";

const LayoutAdmin = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminData");
    navigate("/admin");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <AdminPanelSettingsIcon fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin
            </Typography>
            <Button onClick={() => handleLogout()} color="inherit">
              Đăng xuất
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="grid grid-cols-6">
        <div className="h-screen col-span-1">
          <SideBar />
        </div>
        <div className={`w-full col-span-5`}>
          <div className="mx-5">
            <div>
              <Search />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
