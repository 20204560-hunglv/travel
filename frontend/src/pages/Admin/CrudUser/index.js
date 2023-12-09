import styles from "./style.module.css";
import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import axios from "axios";
const CrudUser = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://63b3a2935901da0ab383d03e.mockapi.io/user?fbclid=IwAR08HoFdy8Zd4sWpAt7lf7j7sCEaoB3JaOkkXo3lUb3jwKjKFGmGzdj9KPg"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // if (data === null || typeof data !== 'object' || !Array.isArray(data)) {
  //   console.error('Invalid data:', data);
  //   return <p>Error loading data</p>;
  // }
  return (
    <LayoutAdmin>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Mật khẩu</th>
            <th>Số điện thoại</th>
            <th>Ngày tạo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone_number}</td>
                <td>{user.create_date}</td>
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
export default CrudUser;
