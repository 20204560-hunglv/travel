import styles from "./Login.module.css";
import DefaultLayout from "../../components/Layout/DefaultLayout";
const Login = ({ onclick }) => {
  return (
    <DefaultLayout>
      <div className={styles.main}>
      <div className={styles.contain}>
        <div className={styles.login}>
          <header className={styles.loginHeader}>
            <h1>Đăng nhập</h1>
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
                  required
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
                  required
                />
                <i className="fa-solid fa-lock" />
              </div>
            </fieldset>
            <fieldset className={styles.loginSubmit}>
              <p>Quên mật khẩu?</p>
              <button className={styles.loginSubmitButton}>Đăng nhập</button>
            </fieldset>
          </form>
          <div className={styles.loginOther}>
            <p>Hoặc đăng nhập bằng</p>
            <div className={styles.loginOtherIcon}>
              <i className={`fa-brands fa-facebook ${styles.faFace}`} />
              <i className={`fa-brands fa-google ${styles.faGoog}`} />
            </div>
          </div>
          <div className={styles.loginRegister}>
            <p onClick={onclick}>Đăng ký</p>
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Login;
