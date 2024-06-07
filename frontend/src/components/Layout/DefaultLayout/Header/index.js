import {Link} from "react-router-dom";
import DropMenuAuth from "../../../DropMenuAuth";

const Header = () => {

  const storedUserDataString = localStorage.getItem("userData");

  return (
    <header className="border-b border-dfe3e6">
      <div className="h-16 m-auto flex justify-between items-center w-11/12">
        <nav className="h-full">
          <ul className="list-none h-full flex items-center pl-0">
            <li
              className={`float-left text-sm font-bold h-full flex items-center
              relative w-max mx-2 hover:bg-white transition-colors 
              duration-500 header-nav`}
            >
              <Link to="/">
                <p className="text-center text-666666 cursor-pointer">
                  Trang chủ
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {!storedUserDataString ? (
          <div className="flex">
            <div className=" py-2 px-3 bg-white rounded-lg border border-111111 
            hover:bg-slate-300 hover:border-slate-300 transition-color 
            duration-500 mr-3">
              <Link to="/login">
                <p>Đăng nhập</p>
              </Link>
            </div>
            <div className="text-white py-2 px-3 rounded-lg bg-111111 
            hover:bg-404040 transition-color duration-500">
              <Link to="/register">
                <p>Đăng ký</p>
              </Link>
            </div>
          </div>
        ) : (
          <DropMenuAuth />
        )}
      </div>
    </header>
  );
};

export default Header;
