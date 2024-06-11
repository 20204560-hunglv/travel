import SideBar from "./SideBar";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoWhite from "../../Icons/logoWhite";

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
            {/*<AdminPanelSettingsIcon fontSize="large" sx={{ mr: 2 }} />*/}
            {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
            {/*  Admin*/}
            {/*</Typography>*/}
            <div className='w-10/12 mx-auto flex'>
              <Box sx={{ flexGrow: 1 }}>
                <LogoWhite />
              </Box>
              <Button
                  startIcon={<LogoutIcon />}
                  onClick={() => handleLogout()}
                  color="inherit"
              >
                Đăng xuất
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="grid grid-cols-6">
        <div className="h-screen col-span-1">
          <SideBar />
        </div>
        <div className={`w-full col-span-5`}>
          <div className="mx-5">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
