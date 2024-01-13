import { useNavigate } from "react-router-dom";

const Premium = () => {
  const navigate = useNavigate()
  const links = [
    {
      name: "Hà Nội - Nghĩa Lộ - Tú Lệ - Mù Cang Chải",
      link: "https://media.travel.com.vn/Tour/tfd_221212091808_874768.jpg",
      id: "659a190fec6cc5998ab34037",
    },
    {
      name: "Cần Thơ - Hà Nội",
      link: "https://media.travel.com.vn/Tour/tfd_220725014536_039495.jpg",
      id: "659c8acda01d96e977e865ed",
    },
    {
      name: "Hà Nội - Nghỉ Dưỡng Du Thuyền Hạ Long Cao Cấp - Ninh Bình - Bái Đính - Tràng An | Mùng 2 Tết",
      link: "https://media.travel.com.vn/Destination/tf_231120105641_820562_Sightseeing%20(5).jpg",
      id: "659c8a65a01d96e977e865eb",
    },
  ];

  return (
    <div className="pt-20 m-auto w-11/12">
      <h3 className="font-bold text-3xl text-185a9d">Tour mới nhất</h3>
      <div className="w-full overflow-x-hidden mt-3">
        <div
          className="flex justify-between relative left-0 duration-500"
          // style={{
          //   //do khi mounted vao thi useEffect chua cap nhat -> currentIndex la null
          //   left: currentIndex === null ? 0 : `-${currentIndex * 449}px`,
          // }}
        >
          {links.map((item, index) => (
            <div
            onClick={()=>{
              navigate(`/tour/${item.id}`)
            }}
            key={index} className="w-1div3 cursor-pointer">
              <img
                className="rounded-xl  h-72"
                src={item.link}
                alt="img"
              />
              <p className="mt-2 font-bold text-center text-3a7bd5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Premium;
