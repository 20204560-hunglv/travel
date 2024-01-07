import styles from "./style.module.css";
import citys from '../../../utils/citys'

const Choose = (props) => {
  return (
    <div className={styles.choose}>
      <h5>{props.label}</h5>
      <select className={styles.input}>
      <option value="">Chọn địa phương</option>
        {citys.map((city,index)=>(
          <option key={index} value={city}>{city}</option>
        ))}
        
      </select>
    </div>
  );
};

const Filter = () => {
  return (
    <div className={styles.contain}>
      <p className={`${styles.filterResult} text-center`}>Lọc kết quả</p>
      <Choose label="ĐIỂM ĐI" option="TP. Hồ Chí Minh" />
      <Choose label="ĐIỂM ĐẾN" option="Hà Nội" />
      <div className={styles.choose}>
        <h5>NGÀY ĐI</h5>
        <input className={styles.input} type="date" ></input>
      </div>
      <div className="text-center mt-6 cursor-pointer">
        <div className="py-2 px-5 rounded no-underline bg-slate-400 transition-colors text-blue-900 font-bold hover:bg-blue-900 hover:text-white">Tìm kiếm</div>
      </div>
    </div>
  );
};
export default Filter;
