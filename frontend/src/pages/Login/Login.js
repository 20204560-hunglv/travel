import DefaultLayout from "../../components/Layout/DefaultLayout";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { login } from "../../services/AuthServices";
import { Button, TextField } from "@mui/material";
import LoginValidate from "./../../validators/LoginValidate";
import { setLocalStorage } from "../../utils/LocalStorage";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const handleToSubmit = useCallback(async () => {
    try {
      LoginValidate({ name, pass });
      const response = await login(name, pass);
      setLocalStorage({
        key: "userData",
        value: JSON.stringify(response.data.user),
      });
      navigate("/");
    } catch (error) {
      handleNotify("warning", "", error.message);
    }
  }, [name, navigate, pass]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleToSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleToSubmit]);

  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={`calc-64 flex items-center`}>
        <div
          className={`text-666666 m-auto flex flex-col justify-center w-max rounded-lg `}
        >
          <div>
            <div className="text-center mb-5">
              <h1 className="text-4xl font-bold mb-3 text-333333">Đăng nhập</h1>
              <div className="flex justify-center">
                <p className="text-sm mr-1">Chưa có tài khoản?</p>
                <div
                  className="text-center text-sm font-bold w-max cursor-pointer
          transition-colors hover:text-neutral-500 text-333333"
                >
                  <Link to="/register">Đăng ký</Link>
                </div>
              </div>
            </div>
            <form>
              <fieldset
                className={`border-none flex flex-col h-48 justify-between`}
              >
                <div className={`flex flex-col m-auto `}>
                  <TextField
                    className="w-400"
                    sx={{
                      mt: 1,
                      mb: 4,
                    }}
                    label="Tên đăng nhập"
                    value={name}
                    onChange={changeName}
                  />
                </div>
                <div className={`flex flex-col m-auto `}>
                  <TextField
                    className="w-400"
                    sx={{
                      mt: 1,
                      mb: 4,
                    }}
                    label="Mật khẩu"
                    type="password"
                    value={pass}
                    onChange={changePass}
                  />
                </div>
              </fieldset>
              <fieldset
                className={`border-none h-10 ml-auto mr-auto justify-center mt-5`}
              >
                <Button
                  className="w-full"
                  onClick={handleToSubmit}
                  variant="contained"
                >
                  Đăng nhập
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
