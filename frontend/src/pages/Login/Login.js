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
            <div>
              <div class="flex items-center justify-center mt-4 ">
                <button class="w-full flex justify-center items-center bg-white border border-gray-300 rounded-3xl shadow-md px-6 py-1 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <svg
                    class="h-4 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="800px"
                    height="800px"
                    viewBox="0 0 48 48"
                    version="1.1"
                  >
                    {" "}
                    <title>Google-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
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
