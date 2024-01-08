import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  let location = useLocation();
  const list = [
    { pathName: "/admin/crud-user", label: "CRUD người dùng" },
    { pathName: "/admin/crud-tour", label: "CRUD tour" },
    // {pathName:"/admin/crud-user",label: "CRUD khuyến mãi"},
    { pathName: "/admin/hotel", label: "Duyệt khách sạn" },
    { pathName: "/admin/order", label: "Duyệt order" },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("adminData");
    navigate("/admin");
  };
  return (
    <div className={styles.main}>
      <h3>Quản lý dữ liệu Admin</h3>
      <div className="relative my-5 ">
        <div className="flex items-center flex-col w-full font-medium">
          {list.map((item, index) => (
            <Link to={`${item.pathName}`} key={index} className="w-full">
              <div
                className={`
            ${
              location.pathname === item.pathName
                ? "bg-3a7bd5 text-white"
                : "bg-gray-300"
            }
            hover:bg-3a7bd5 w-full`}
              >
                <div className="text-inherit select-none flex justify-center items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <p className="flex text-inherit hover:text-white justify-center items-center flex-grow text-[1.15rem]">
                    {item.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {/* <!-- menu item --> */}
        </div>
      </div>
      <p onClick={handleClick}>Đăng xuất</p>
    </div>
  );
};
export default SideBar;
