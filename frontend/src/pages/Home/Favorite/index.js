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
    className={`mt-4 w-24-100 cursor-pointer`}>
      <img className="w-full h-56 rounded-xl" src={props.link} alt=""/>
      <p className="block font-bold my-2 text-xs ml-2 text-blue-900">{props.title}</p>
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
    <div className="pt-10 m-auto mb-10 w-11/12">
      <h3 className="font-bold text-3xl text-blue-900">Điểm đến yêu thích</h3>
      <div className="flex justify-between">
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
