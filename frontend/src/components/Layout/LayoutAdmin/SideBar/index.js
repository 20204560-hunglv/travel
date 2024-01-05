import { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  let location = useLocation();
  const list = [
    {pathName:"/admin/crud-user",label: "CRUD người dùng"},
    {pathName:"/admin/crud-tour",label: "CRUD tour"},
    // {pathName:"/admin/crud-user",label: "CRUD khuyến mãi"},
    {pathName:"/admin/hotel",label: "Duyệt khách sạn"},
    {pathName:"/admin/order",label: "Duyệt order"},
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("adminData");
    navigate("/admin");
  };
  console.log(location.pathname == "/admin/crud-tour")
  return (
    <div className={styles.main}>
      <h3>Quản lý dữ liệu Admin</h3>
      <ul>
        {list.map((item, index) => (
          <li
            className={`${location.pathname == item.pathName ? "bg-3a7bd5" : "bg-gray-300"}`}
            key={index}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <p onClick={handleClick}>Đăng xuất</p>
    </div>
  );
};
export default SideBar;
