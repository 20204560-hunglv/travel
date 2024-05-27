import DefaultLayout from "../../components/Layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { handleNotify } from "../../components/Notification/index";
import { ReactNotifications } from "react-notifications-component";
import { signUp } from "../../services/AuthServices";
import { RegisterValidate } from "../../validators/RegisterValidate";
import { Button, TextField } from "@mui/material";

const LoginInputArea = ({ title, change, value }) => {
  return (
    <div className={`flex flex-col m-auto`}>
      <TextField
        className="w-400"
        sx={{
          mt: 1,
          mb: 4,
        }}
        type="password"
        label={title}
        value={value}
        onChange={change}
      />
    </div>
  );
};
const Register = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const changeNewPass = (event) => {
    setNewPass(event.target.value);
  };
  const handleToSubmit = async () => {
    try {
      RegisterValidate({ name, pass, newPass });
      await signUp(name, pass);
      setName("");
      setPass("");
      setNewPass("");
      handleNotify("success", "Thành công", "Đăng ký thành công!");
    } catch (error) {
      handleNotify("warning", "", error.message);
    }
  };

  return (
    <>
      <ReactNotifications />
      <DefaultLayout>
        <div className={`my-16`}>
          <div
            className={`text-666666 m-auto flex flex-col justify-center w-max rounded-lg `}
          >
            <div>
              <header className="text-center mb-5">
                <h1 className="text-4xl font-bold mb-3 text-333333">
                  Tạo tài khoản
                </h1>
                <div className="flex justify-center">
                  <p className="text-sm mr-1">Đã có tài khoản?</p>
                  <div
                    className="text-center text-sm font-bold w-max cursor-pointer
          transition-colors hover:text-neutral-500 text-333333"
                  >
                    <Link to="/login">Đăng nhập</Link>
                  </div>
                </div>
              </header>
              <div>
                <fieldset className={`flex flex-col justify-between`}>
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
                  <LoginInputArea
                    title="Mật khẩu"
                    name="password"
                    change={changePass}
                    value={pass}
                  />
                  <LoginInputArea
                    title="Xác nhận mật khẩu"
                    name="confirmPass"
                    change={changeNewPass}
                    value={newPass}
                  />
                </fieldset>
                <fieldset
                  className={`h-10 ml-auto mr-auto justify-center mt-5`}
                >
                  <Button
                    variant="contained"
                    className="w-full"
                    onClick={() => handleToSubmit()}
                  >
                    Đăng ký
                  </Button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};
export default Register;
