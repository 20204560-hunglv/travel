import { useState } from "react";
import styles from "./style.module.css";
import { useEffect } from "react";

const Premium = () => {
  const links = [
    "https://media.travel.com.vn/Advertisings/bn_231019_BannerWeb_MienBac-04.webp",
    "https://media.travel.com.vn/Advertisings/bn_231101_DL%20AmThucMienTrung_1.webp",
    "https://media.travel.com.vn/Advertisings/bn_231107_viber_image_2023-11-07_11-41-51-609.webp",
    "https://media.travel.com.vn/Advertisings/bn_230928_Dubai%20412x309px.webp",
    "https://media.travel.com.vn/Advertisings/bn_230927_BannerFrameThaiLan%20412x309.webp",
    "https://media.travel.com.vn/Advertisings/bn_231018_BannerWebHanQuoc%20412x309-01.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        // vi giao dien co 3 img, nen links.length thi lần sau cùng chỉ hiện 1 img mà thôi
        // nhung muc dich cần hiện 3 img -> length-2
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (links.length-2));
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval khi component bị unmount
  }, []);
  return (
    <div className={styles.contain}>
      <h3 className="font-bold">Ưu đãi</h3>
      <div className={styles.gallery}>
        <div
          className={styles.slide}
          style={{
            //do khi mounted vao thi useEffect chua cap nhat -> currentIndex la null
            left: currentIndex === null ? 0 : `-${currentIndex * 449}px`, 
          }}
        >
          {links.map((item, index) => (
            <img key={index} className={styles.item} src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Premium;
