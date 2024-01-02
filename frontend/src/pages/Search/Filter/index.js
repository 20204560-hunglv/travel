import styles from "./style.module.css";

const Choose = (props) => {
  return (
    <div className={styles.choose}>
      <h5>{props.label}</h5>
      <select className={styles.input}>
        <option>{props.option}</option>
      </select>
    </div>
  );
};
const Pick = (props) => {
  return (
    <div className={styles.pick}>
      <h5>{props.label}</h5>
      <div className={styles.pickContain}>
        <div className={styles.pickItem}>{props.listPicks[0]}</div>
        <div className={styles.pickItem}>{props.listPicks[1]}</div>
        <div className={styles.pickItem}>{props.listPicks[2]}</div>
        <div className={styles.pickItem}>{props.listPicks[3]}</div>
      </div>
    </div>
  );
};
const Filter = () => {
  const listPeoples = ["1 người", "2 người", "3-5 người", "5+ người"];
  const listTypes = ["Cao cấp", "Tiêu chuẩn", "Tiết kiệm", "Giá tốt"];
  return (
    <div className={styles.contain}>
      <p className={styles.filterResult}>Lọc kết quả</p>
      <Choose label="LOẠI HÌNH TOUR" option="-- Tất cả --" />
      <Choose label="ĐIỂM ĐI" option="TP. Hồ Chí Minh" />
      <Choose label="ĐIỂM ĐẾN" option="Hà Nội" />
      <div className={styles.choose}>
        <h5>NGÀY ĐI</h5>
        <input className={styles.input} type="date" ></input>
      </div>
      <Pick label="SỐ NGƯỜI" listPicks={listPeoples} />
      <Pick label="LOẠI TOUR" listPicks={listTypes} />
      <div className={styles.arrivallink}>
        <a className={styles.arrivallinka}>Tìm kiếm</a>
      </div>
    </div>
  );
};
export default Filter;
