import SideBar from "./SideBar";
import { AppBar, Box, Button, Paper, Toolbar } from "@mui/material";
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
            <div className="w-10/12 mx-auto flex">
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
        <Paper className="calc-64 col-span-1">
          <SideBar />
        </Paper>
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
