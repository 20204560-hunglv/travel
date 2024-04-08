import styles from "./Login.module.css";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../utils/axios";

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
  const handleToSubmit = () => {
    if (!name || !pass)
      handleNotify("Warning", "Warning", "Cần nhập đầy đủ thông tin");
    else
      axios
        .post("/api/v1/login", {
          username: name,
          password: pass,
        })
        .then((response) => {
          if (response.status == 200) {
            // console.log(response.data.user)
            localStorage.setItem(
              "userData",
              JSON.stringify(response.data.user)
            );
            navigate("/");
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
                error.response.status
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
  const chooseShow = () => {
    const checkbox = document.getElementById("showPasswordCheckbox");
    var passwordInput = document.getElementById("password");

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
  }
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={`my-16`}>
        <div
          className={`text-666666 m-auto flex flex-col justify-center w-max rounded-lg `}
        >
          <div>
            <header className="text-center mb-5">
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
            </header>
            <form action="" method="">
              <fieldset className={`flex flex-col h-48 justify-between`}>
                <div
                  className={`flex flex-col m-auto ${styles.loginInputArea}`}
                >
                  <div className="flex justify-between">
                    <p>Tên đăng nhập</p>
                  </div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={changeName}
                  />
                </div>
                <div
                  className={`flex flex-col m-auto ${styles.loginInputArea}`}
                >
                  <div className="flex justify-between">
                    <p>Mật khẩu</p>
                    <div className="flex justify-between items-center">
                      <p className="mr-1 text-xs">Hiện</p>
                      <input type="checkbox" id="showPasswordCheckbox" onChange={()=>chooseShow()}/>
                    </div>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    minLength="8"
                    onChange={changePass}
                  />
                </div>
              </fieldset>
              <fieldset className={`${styles.loginSubmit} justify-center mt-5`}>
                <button
                  type="button"
                  onClick={handleToSubmit}
                  className="px-5 py-2 w-full bg-C3C3C3 rounded-3xl text-white cursor-pointer 
              transition-colors border-none hover:bg-gray-500"
                >
                  Đăng nhập
                </button>
              </fieldset>
            </form>
            <div className={styles.loginOther}>
              <p>Hoặc</p>
              <div>
                <Link to="/admin">
                  <p className="underline mt-5 text-center text-sm text-gray-500">
                    Đăng nhập cho Admin
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
