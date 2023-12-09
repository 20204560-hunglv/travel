import styles from "./style.module.css";

const Saleitem = (props) => {
  const handleToBooking = () => {
    window.location.href = "/booking";
  };
  return (
    <div className={styles.saleitem}>
      <img src={props.link} className={styles.saleitempic}></img>
      <div className={styles.saledescribe}>
        <p className={styles.saleitemtimecreate}>28/10/2023</p>
        <p className={styles.saleitemcontent}>{props.address}</p>
        <p className={styles.saleitemfrom}>Nơi khởi hành: TP. Hồ Chí Minh</p>
        <p className={styles.saleitemprice}>5.000.000đ</p>
        <p onClick={handleToBooking} className={styles.saleitemslot}>
          Đặt
        </p>
      </div>
      <div></div>
    </div>
  );
};
const Sale = () => {
  const links = [
    {
      link: "https://media.travel.com.vn/Combo/s_img_16082023_e1c5d1d6-cdb9-4c20-827d-a3adbca8a47a_B%C3%8AN%20NGO%C3%80I%20KS.webp",
      address: "Quy Nhơn",
    },
    {
      link: "https://media.travel.com.vn/Combo/s_img_30082023_1e30bd0f-d546-41d2-ad9d-cc7e0e474294_z4607971211874_cbc4aea01ae65ad0b8a3ced5a8864238.webp",
      address: "Đà Nẵng",
    },
    {
      link: "https://media.travel.com.vn/destination/dg_230628_phu-quoc.webp",
      address: "Phú Quốc",
    },
  ];
  return (
    <div>
      <p className={styles.saletitle}>Gói ưu đãi đặc biệt</p>
      <div className={styles.sale}>
        {links.map((item, index) => (
          <Saleitem key={index} link={item.link} address={item.address} />
        ))}
      </div>
      <div className={styles.arrivallink}>
        <a className={styles.arrivallinka}>Xem tất cả</a>
      </div>
    </div>
  );
};

export default Sale;
