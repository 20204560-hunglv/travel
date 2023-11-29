import styles from "./style.module.css";
import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
const CrudTour = () => {
  const data=[
    {
        ID: 1,
        name: "Hà Nội - TP. HCM",
        startDay: '28/11/2023',
        endDay: '5/12/2023',
        price: '5000000đ'
    },
    {
        ID: 2,
        name: "Hà Nội - TP. HCM",
        startDay: '28/11/2023',
        endDay: '5/12/2023',
        price: '5000000đ'
    },
    {
        ID: 3,
        name: "Hà Nội - TP. HCM",
        startDay: '28/11/2023',
        endDay: '5/12/2023',
        price: '5000000đ'
    },
    {
        ID: 4,
        name: "Hà Nội - TP. HCM",
        startDay: '28/11/2023',
        endDay: '5/12/2023',
        price: '5000000đ'
    },
    {
        ID: 5,
        name: "Hà Nội - TP. HCM",
        startDay: '28/11/2023',
        endDay: '5/12/2023',
        price: '5000000đ'
    },
    {
        ID: 6,
        name: "Hà Nội - TP. HCM",
        startDay: '28/11/2023',
        endDay: '5/12/2023',
        price: '5000000đ'
    },
  ]
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên tour</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th>Giá tour</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((tour) => (
              <tr key={tour.ID}>
                <td>{tour.ID}</td>
                <td>{tour.name}</td>
                <td>{tour.startDay}</td>
                <td>{tour.endDay}</td>
                <td>{tour.price}</td>
                <td className={styles.icons}>
                  <i className="fa-solid fa-pen"></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </LayoutAdmin>
  );
};
export default CrudTour;
