import styles from "./style.module.css";
import hanoijpg from '../../../images/hanoi.jpg'

const Saleitem = () => {
    return (
        <div className={styles.saleitem}>
          <img
            src={hanoijpg}
            className={styles.saleitempic}
          ></img>
          <div className={styles.saledescribe}>
            <p className={styles.saleitemtimecreate}>28/10/2023</p>
            <p className={styles.saleitemcontent}>Hồ Gươm - Hà Nội</p>
            <p className={styles.saleitemfrom}>
              Nơi khởi hành: TP. Hồ Chí Minh
            </p>
            <p className={styles.saleitemprice}>5.000.000đ</p>
            <p className={styles.saleitemslot}>Đặt</p>
          </div>
        </div>
    )
}
const Sale = () => {
  return (
    <div>
      <p className={styles.saletitle}>Tour ưa thích</p>
      <div className={styles.sale}>
        <Saleitem />
        <Saleitem />
        <Saleitem />
        <Saleitem />
        <Saleitem />
        <Saleitem />
      </div>
      <div className={styles.arrivallink}>
        <a className={styles.arrivallinka}>Xem tất cả</a>
      </div>
    </div>
  );
};

export default Sale;
