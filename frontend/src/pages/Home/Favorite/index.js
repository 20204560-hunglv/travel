import styles from "./style.module.css";

const Item = (props) => {
  return (
    <div className={`${styles.item} cursor-pointer`}>
      <img src={props.link} />
      <a>{props.title}</a>
      {/* <p>{`Đã có ${props.visitor} lượt khách`}</p> */}
    </div>
  );
};
const Favorite = () => {
  const linkImgs = [
    {
      link: "https://media.travel.com.vn/destination/dg_200827_HA%20LONG_322052888.jpg",
      title: "Hạ Long",
      visitor: 10000,
    },
    {
        link: "https://media.travel.com.vn/destination/dg_230628_cau-rong-ve-dem.webp",
        title: "Đà Nẵng",
        visitor: 80000,
      },
      {
        link: "https://media.travel.com.vn/destination/dg_230628_da-lat.webp",
        title: "Đà Lạt",
        visitor: 50000,
      },
      {
        link: "https://media.travel.com.vn/destination/dg_230628_phu-quoc.webp",
        title: "Phú Quốc",
        visitor: 70000,
      },
  ];
  return (
    <div className={styles.contain}>
      <h3>Điểm đến yêu thích</h3>
      <div className={styles.gallery}>
        {linkImgs.map((item,index) => (
            <Item
            key = {index}
            link={item.link}
            title={item.title}
            visitor={item.visitor}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorite;
