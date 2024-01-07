import styles from "./style.module.css";
import { Link } from "react-router-dom";
import DropMenuAuth from "../../../DropMenuAuth";

const Header = () => {
  const storedUserDataString = localStorage.getItem("userData");
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            <li className={styles.headerNavLi}>
              {/* <p onClick={handleToHome}>Trang chủ</p> */}
              <Link to="/">
                <p>Trang chủ</p>
              </Link>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <Link to="/news">
                <p>Tin tức</p>
              </Link>
              <hr />
            </li>
          </ul>
        </nav>
        {!storedUserDataString ? (
          <Link to="/login">
            <i
              className={`fa-regular fa-circle-user ${styles.faCircleUser}`}
            ></i>
          </Link>
        ) : (
          <DropMenuAuth />
        )}
      </div>
    </header>
  );
};

export default Header;
