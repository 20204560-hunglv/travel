import styles from "./style.module.css";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { handleNotify } from "../../components/Notification/index";
import { ReactNotifications } from "react-notifications-component";
import axios from "../../utils/axios";

const LoginInputArea = ({ title, name, change, value }) => {
  return (
    <div className={styles.loginInputArea}>
      <p>{title}</p>
      <input
        type="password"
        name={name}
        id={name}
        placeholder="Nhập mật khẩu"
        minLength="8"
        onChange={change}
        value={value}
      />
      <i className="fa-solid fa-lock" />
    </div>
  );
};
const Register = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const changeNewPass = (event) => {
    setNewPass(event.target.value);
  };
  const handleToSubmit = () => {
    if (!name || !pass || !newPass)
      handleNotify("Warning", "Warning", "Cần nhập đầy đủ thông tin");
    else if (pass !== newPass)
      handleNotify("Warning", "Warning", "Mật khẩu không giống nhau");
    else {
      const exe = async () => {
        try {
          await axios.post("/api/v1/signup", {
            username: name,
            password: pass,
          });
          setName("")
          setPass("")
          setNewPass("")
          handleNotify('success','Thành công','Đăng ký thành công!')
        } catch (error) {
          console.log(error);
        }
      };
      exe();
    }
  };
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={styles.main}>
        <div className={styles.contain}>
          <div className={styles.login}>
            <header className={styles.loginHeader}>
              <h1 className="text-2xl font-bold">Đăng ký</h1>
            </header>
            <div>
              <fieldset className={styles.loginInput}>
                <div className={styles.loginInputArea}>
                  <p>Tên đăng nhập</p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nhập tên tài khoản"
                    onChange={changeName}
                    value={name}
                  />
                  <i className="fa-regular fa-user" />
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
              <fieldset className={styles.loginSubmit}>
                {/* <p>Quên mật khẩu?</p> */}
                <button
                  type="button"
                  className="px-5 mt-16 py-3 bg-00d2ff rounded-3xl text-white cursor-pointer 
                  transition-colors border-none mx-auto hover:bg-3a7bd5"
                  onClick={handleToSubmit}
                >
                  Đăng ký
                </button>
              </fieldset>
            </div>
            <div
              className="flex justify-center mt-12 text-center w-max mx-auto cursor-pointer 
            transition-colors text-185a9d hover:text-3a7bd5"
            >
              {/* <p onClick={handleLogin}>Đăng nhập</p> */}
              <Link to="/login" className="mt-5 text-center hover:text-3a7bd5">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
        <div style={{ right: `-300px` }} className={styles.alert}></div>
      </div>
    </DefaultLayout>
  );
};
export default Register;
