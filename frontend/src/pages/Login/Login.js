import styles from "./Login.module.css";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { ReactNotifications } from 'react-notifications-component'
import {handleNotify} from "../../components/Notification/index"
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const changeName = (event) => {
    setName(event.target.value)
  }
  const changePass = (event) => {
    setPass(event.target.value)
  }
  const handleToSubmit = () => {
    if(!name || !pass) handleNotify('Warning','Warning','Cần nhập đầy đủ thông tin');
    
  };
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={styles.main}>
      <div className={styles.contain}>
        <div className={styles.login}>
          <header className={styles.loginHeader}>
            <h1 className="text-2xl font-bold" >Đăng nhập</h1>
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
            <fieldset className={styles.loginSubmit}>
              <p>Quên mật khẩu?</p>
              <button type="button" onClick={handleToSubmit}
              className="px-5 py-3 bg-00d2ff rounded-3xl text-white cursor-pointer 
              transition-colors border-none hover:bg-3a7bd5"
              >Đăng nhập</button>
            </fieldset>
          </form>
          <div className={styles.loginOther}>
            <p>Hoặc đăng nhập bằng</p>
            <div className={styles.loginOtherIcon}>
              <i className={`fa-brands fa-facebook ${styles.faFace}`} />
              <i className={`fa-brands fa-google ${styles.faGoog}`} />
            </div>
          </div>
          <div className="mt-12 text-center w-max mx-auto cursor-pointer 
          transition-colors hover:text-3a7bd5">
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
