const Premium = () => {
  const links = [
    "https://media.travel.com.vn/Advertisings/bn_231019_BannerWeb_MienBac-04.webp",
    "https://media.travel.com.vn/Advertisings/bn_231101_DL%20AmThucMienTrung_1.webp",
    "https://media.travel.com.vn/Advertisings/bn_231107_viber_image_2023-11-07_11-41-51-609.webp",
  ];

  return (
    <div className="pt-10 m-auto w-11/12">
      <h3 className="font-bold text-3xl">Tour mới nhất</h3>
      <div className="w-full overflow-x-hidden mt-3">
        <div
          className="flex justify-between relative left-0 duration-500"
          // style={{
          //   //do khi mounted vao thi useEffect chua cap nhat -> currentIndex la null
          //   left: currentIndex === null ? 0 : `-${currentIndex * 449}px`,
          // }}
        >
          {links.map((item, index) => (
            <img
              key={index}
              className="w-1div3 rounded-xl cursor-pointer"
              src={item}
              alt="img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Premium;
