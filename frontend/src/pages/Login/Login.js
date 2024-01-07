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
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={styles.main}>
        <div className={styles.contain}>
          <div className={styles.login}>
            <header className={styles.loginHeader}>
              <h1 className="text-2xl font-bold">Đăng nhập</h1>
            </header>
            <form action="" method="">
              <fieldset className={styles.loginInput}>
                <div className={styles.loginInputArea}>
                  <p>Tên đăng nhập</p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nhập tên tài khoản"
                    onChange={changeName}
                  />
                  <i className="fa-regular fa-user" />
                </div>
                <div className={styles.loginInputArea}>
                  <p>Mật khẩu</p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    minLength="8"
                    onChange={changePass}
                  />
                  <i className="fa-solid fa-lock" />
                </div>
              </fieldset>
              <fieldset className={`${styles.loginSubmit} justify-center mt-5`}>
                {/* <p>Quên mật khẩu?</p> */}
                <button
                  type="button"
                  onClick={handleToSubmit}
                  className="px-5 py-3 bg-00d2ff rounded-3xl text-white cursor-pointer 
              transition-colors border-none hover:bg-3a7bd5"
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

                {/* <i className={`fa-brands fa-facebook ${styles.faFace}`} />
                <i className={`fa-brands fa-google ${styles.faGoog}`} /> */}
              </div>
            </div>
            <div
              className="mt-12 text-center w-max mx-auto cursor-pointer 
          transition-colors hover:text-3a7bd5"
            >
              {/* <p onClick={handleLogin}>Đăng ký</p> */}
              <Link to="/register">Đăng ký</Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
