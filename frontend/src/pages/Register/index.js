import styles from "./style.module.css";
import Alert from "../../components/Notification/Alert";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
const LoginInputArea = ({ title, name }) => {
  return (
    <div className={styles.loginInputArea}>
      <p>{title}</p>
      <input
        type="password"
        name={name}
        id={name}
        placeholder="Nhập mật khẩu"
        minLength="8"
        required
      />
      <i className="fa-solid fa-lock" />
    </div>
  );
};
const Register = () => {
  const [hideAlert, setHideAlert] = useState(false);
  useEffect(() => {
    const handleToShowAlert = () => {
      setHideAlert(true);
    };
    const btn = document.querySelector(`.${styles.loginSubmitButton}`);
    btn.addEventListener("click", handleToShowAlert);
    return () => {
      btn.removeEventListener("click", handleToShowAlert);
    };
  }, []);
  useEffect(() => {
    const divAlert = document.querySelector(`.${styles.alert}`);
    divAlert.style.right= (divAlert.style.right == `-300px`) ? `0px` : `-300px`;
  }, [hideAlert]);
  const handleToHideAlert = () => {
    setHideAlert(false);
  };
  return (
    <DefaultLayout>
      <div className={styles.main}>
        <div className={styles.contain}>
          <div className={styles.login}>
            <header className={styles.loginHeader}>
              <h1>Đăng ký</h1>
            </header>
            <form>
              <fieldset className={styles.loginInput}>
                <div className={styles.loginInputArea}>
                  <p>Tên đăng nhập</p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nhập tên tài khoản"
                    required
                  />
                  <i className="fa-regular fa-user" />
                </div>
                <LoginInputArea title="Mật khẩu" name="password" />
                <LoginInputArea title="Xác nhận mật khẩu" name="confirmPass" />
              </fieldset>
              <fieldset className={styles.loginSubmit}>
                {/* <p>Quên mật khẩu?</p> */}
                <button type="button" className={styles.loginSubmitButton}>
                  Đăng ký
                </button>
              </fieldset>
            </form>
            <div className={styles.loginOther}>
              <p>Hoặc đăng ký bằng</p>
              <div className={styles.loginOtherIcon}>
                <i className={`fa-brands fa-facebook ${styles.faFace}`} />
                <i className={`fa-brands fa-google ${styles.faGoog}`} />
              </div>
            </div>
            <div className={styles.loginRegister}>
              <p onClick={onclick}>Đăng nhập</p>
            </div>
          </div>
        </div>
        <div style={{right: `-300px`}} className={styles.alert}>
          {hideAlert && <Alert handleToHideAlert={handleToHideAlert} />}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Register;
