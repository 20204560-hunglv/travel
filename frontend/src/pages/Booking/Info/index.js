import styles from "./style.module.css";
const Input = (props) => {
  return (
    <div className={styles.item}>
      <p>{props.label}</p>
      <input type={props.type} name={props.name} id={props.name} />
    </div>
  );
};
const Info = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.info}>
        <h3>Thông tin liên lạc</h3>
        <div className={styles.contain}>
          <Input type="text" label="Họ và Tên" name="fullName" />
          <Input type="email" label="Email" name="email" />
          <Input type="text" label="Số điện thoại" name="phone" />
          <Input type="text" label="Địa chỉ" name="address" />
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.priceInfo}>
          <p className={styles.priceLabel}>TỔNG CỘNG</p>
          <p className={styles.sum}>4,990,000₫</p>
        </div>
        <div className={styles.book}>ĐẶT NGAY</div>
      </div>
    </div>
  );
};
export default Info;
