import { useState } from "react";
import styles from "./style.module.css";
const SideBar = () => {
  // const [selectedItem, setSelectedItem] = useState(null);

  // const handleItemClick = (item) => {
  //   // Cập nhật giá trị của biến trạng thái khi một mục được chọn
  //   setSelectedItem(item);
  // };
  const list = [
    "Thông tin tài khoản",
    "CRUD người dùng",
    "CRUD tour",
    "CRUD khuyến mãi",
    "Duyệt khách sạn",
    "Duyệt order",
  ];
  return (
    <div className={styles.main}>
      <h3>Quản lý dữ liệu Admin</h3>
      <ul>
        {list.map((item, index) => (
          <li
            // onClick={handleItemClick(index)}
            key={index}
            // className={selectedItem === index ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>Đăng xuất</p>
    </div>
  );
};
export default SideBar;
