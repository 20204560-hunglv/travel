import styles from "./style.module.css";

const Overview = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>THANH TOÁN</h1>
      <div className={styles.contain}>
        <img src="https://media.travel.com.vn/tour/tfd_230810041326_511705_CAP%20TREO%20FANSIPAN.jpg" />
        <div className={styles.content}>
          <p className={styles.title}>Phú Quốc</p>
          <div className={styles.detail}>
            <p>Khởi hành 17/11/2023</p>
            <p>Thời gian 3 ngày</p>
            <p>Nơi khởi hành Hà Nội</p>
            <p>Số chỗ còn nhận 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
