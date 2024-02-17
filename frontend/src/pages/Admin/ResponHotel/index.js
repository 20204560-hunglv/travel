import styles from "./style.module.css";
import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React from "react";
const ResponHotel = () => {
  const data = [
    {
      ID: 1,
      address: "Nam Đàn, Nghệ An",
      spenDay: "28/11/2023",
      price: "5000000đ",
      status: "Đang chờ duyệt",
    },
    {
      ID: 2,
      address: "Nam Đàn, Nghệ An",
      spenDay: "28/11/2023",
      price: "5000000đ",
      status: "Đang chờ duyệt",
    },
    {
      ID: 3,
      address: "Nam Đàn, Nghệ An",
      spenDay: "28/11/2023",
      price: "5000000đ",
      status: "Đang chờ duyệt",
    },
    {
      ID: 4,
      address: "Nam Đàn, Nghệ An",
      spenDay: "28/11/2023",
      price: "5000000đ",
      status: "Đang chờ duyệt",
    },
    {
      ID: 5,
      address: "Nam Đàn, Nghệ An",
      spenDay: "28/11/2023",
      price: "5000000đ",
      status: "Đang chờ duyệt",
    },
    {
      ID: 6,
      address: "Nam Đàn, Nghệ An",
      spenDay: "28/11/2023",
      price: "5000000đ",
      status: "Đang chờ duyệt",
    },
  ];
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://63b3a2935901da0ab383d03e.mockapi.io/user?fbclid=IwAR08HoFdy8Zd4sWpAt7lf7j7sCEaoB3JaOkkXo3lUb3jwKjKFGmGzdj9KPg"
  //         );
  //         setData(response.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  return (
    <LayoutAdmin>
      <div className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Địa chỉ khách sạn</th>
            <th>Ngày gửi</th>
            <th>Giá khách sạn</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.address}</td>
                <td>{item.spenDay}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td className={styles.icons}>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#71BE34" }}
                  ></i>
                  <i
                    className="fa-solid fa-circle-xmark"
                    style={{ color: "#FF623D" }}
                  ></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </LayoutAdmin>
  );
};
export default ResponHotel;
