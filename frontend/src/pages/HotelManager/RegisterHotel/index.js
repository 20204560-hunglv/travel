import LayoutHotelManager from "../../../components/Layout/LayoutHotelManager";
import styles from "./style.module.css";
const Input = (props) => {
  return (
    <input
      type={props.type}
      className={styles.input}
      placeholder={props.placeholder}
    />
  );
};
const RegisterHotel = () => {
  return (
    <LayoutHotelManager>
      <div className={styles.main}>
        <h2>Đăng ký khách sạn</h2>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <Input type="text" placeholder="Tên khách sạn" />
            <Input type="text" placeholder="Số điện thoại" />
            <Input type="email" placeholder="Email liên lạc" />
            <Input type="text" placeholder="Địa chỉ" />
            <div className={styles.imageInput}>
              <p>Hình ảnh về khách sạn</p>
              <input type="file" />
            </div>
          </div>
          <div className={styles.infoItem}>
            <select className={styles.input}>
              <option>Phòng đơn</option>
            </select>
            <input
              type='number'
              className={styles.inputChild}
              placeholder='Số phòng'
            />
            <input
              type='text'
              className={styles.inputChild}
              placeholder='Giá phòng'
            />
            <Input type="text" placeholder="Tiện nghi" />
            <Input type="text" placeholder="Chính sách hủy phòng" />
          </div>
        </div>
        <div className={styles.registerBtn}>Đăng ký</div>
      </div>
    </LayoutHotelManager>
  );
};
export default RegisterHotel;
