import { useNavigate } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import { useEffect, useState } from "react";
import { loginAdmin } from "../../../services/AuthServices";
import { AppBar, Box, Button, TextField, Toolbar } from "@mui/material";
import LogoWhite from "../../../components/Icons/logoWhite";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const handleToSubmit = () => {
    console.log({ name, pass });
    if (!name || !pass)
      handleNotify("Warning", "Warning", "Cần nhập đầy đủ thông tin");
    else
      loginAdmin(name, pass)
        .then((response) => {
          if (response.status === 200) {
            // console.log(response.data.user)
            localStorage.setItem(
              "adminData",
              JSON.stringify(response.data.user),
            );
            navigate("/admin/crud-user");
          } else console.log("Tai khoan khong dung");
        })
        .catch((error) => {
          if (error.response) {
            // Trường hợp máy chủ trả về mã trạng thái 401 (Unauthorized)
            if (error.response.status === 401) {
              handleNotify("warning", "Warning", "Login failed: Unauthorized");
            } else {
              console.log(
                "An error occurred with status code:",
                error.response.status,
              );
            }
          } else if (error.request) {
            // Trường hợp yêu cầu được gửi đi nhưng không có phản hồi từ máy chủ
            console.error("No response received from the server");
          } else {
            // Lỗi xảy ra trong quá trình thiết lập yêu cầu
            console.error("An error occurred:", error.message);
          }
        });
  };

  useEffect(() => {
    const keyPress = (event) => {
      if (event.key === "Enter") handleToSubmit();
    };
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [name, pass]);

  return (
    <div>
      <ReactNotifications />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div className="w-10/12 mx-auto">
              <LogoWhite />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập với vai trò Admin
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <div className="mt-2">
                <TextField
                  fullWidth
                  value={name}
                  onChange={changeName}
                  label="Tài khoản"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <TextField
                  fullWidth
                  label="Mật khẩu"
                  value={pass}
                  onChange={changePass}
                  type="password"
                />
              </div>
            </div>

            <div>
              <Button onClick={handleToSubmit} fullWidth variant="contained">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginAdmin;
