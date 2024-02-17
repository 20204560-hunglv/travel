import styles from "./style.module.css";
import { Link } from "react-router-dom";
import DropMenuAuth from "../../../DropMenuAuth";

const Header = () => {
  const storedUserDataString = localStorage.getItem("userData");
  return (
    <header>
      <div className='h-16 m-auto flex justify-between items-center text-blue-900 w-11/12'>
        <nav className="h-full">
          <ul className='list-none h-full flex items-center pl-0'>
            <li className={`float-left text-xs font-bold h-full flex items-center relative w-max px-2 ${styles.headerNavLi}`}>
              <Link to="/">
                <p className="text-center cursor-pointer">Trang chủ</p>
              </Link>
              <hr/>
            </li>
            <li className={`float-left text-xs font-bold h-full flex items-center relative w-max px-2 ${styles.headerNavLi}`}>
              <Link to="/news">
                <p className="text-center cursor-pointer">Tin tức</p>
              </Link>
              <hr/>
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
