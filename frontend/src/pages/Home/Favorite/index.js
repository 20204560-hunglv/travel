import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const navigate = useNavigate()
  return (
    <div 
    onClick={()=>{
      navigate('/search',
      {
        state: {
          from: '',
          to: props.to,
          start: '',
          period: '',
        },
      })
    }}
    className={`${styles.item} cursor-pointer`}>
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
      to:'halong'
    },
    {
        link: "https://media.travel.com.vn/destination/dg_230628_cau-rong-ve-dem.webp",
        title: "Đà Nẵng",
        visitor: 80000,
        to:'danang'
      },
      {
        link: "https://media.travel.com.vn/destination/dg_230628_da-lat.webp",
        title: "Đà Lạt",
        visitor: 50000,
        to:'lamdong'
      },
      {
        link: "https://media.travel.com.vn/destination/dg_230628_phu-quoc.webp",
        title: "Phú Quốc",
        visitor: 70000,
        to:'kiengiang'
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
            to={item.to}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorite;
