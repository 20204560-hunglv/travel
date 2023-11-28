import styles from "./style.module.css";
const SideBar = () => {
  return (
    <div className={styles.main}>
      <h3>Quản lý dữ liệu Admin</h3>
      <ul>
        <li>Thông tin tài khoản</li>
        <li>CRUD người dùng</li>
        <li>CRUD tour</li>
        <li>CRUD khuyến mãi</li>
        <li>Duyệt khách sạn</li>
        <li>Duyệt order</li>
      </ul>
      <p>Đăng xuất</p>
    </div>
  );
};
export default SideBar;
