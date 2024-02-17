import styles from "./style.module.css";
import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React from "react";
const Order = () => {
  const data = [
    {
      ID: 1,
      name: "Hà Nội - Nghệ An",
      spenDay: "28/11/2023",
      pay: 1,
      status: "Đang chờ duyệt",
    },
    {
      ID: 2,
      name: "Hà Nội - Nghệ An",
      spenDay: "28/11/2023",
      pay: 1,
      status: "Đang chờ duyệt",
    },
    {
      ID: 3,
      name: "Hà Nội - Nghệ An",
      spenDay: "28/11/2023",
      pay: 1,
      status: "Đang chờ duyệt",
    },
    {
      ID: 4,
      name: "Hà Nội - Nghệ An",
      spenDay: "28/11/2023",
      pay: 1,
      status: "Đang chờ duyệt",
    },
    {
      ID: 5,
      name: "Hà Nội - Nghệ An",
      spenDay: "28/11/2023",
      pay: 1,
      status: "Đang chờ duyệt",
    },
    {
      ID: 6,
      name: "Hà Nội - Nghệ An",
      spenDay: "28/11/2023",
      pay: 1,
      status: "Đang chờ duyệt",
    },
  ];
  return (
    <LayoutAdmin>
      <div className={`${styles.main} w-4/5 mx-auto`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên tour</th>
              <th>Ngày đặt</th>
              <th>Đã thanh toán?</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.ID}>
                  <td>{item.ID}</td>
                  <td>{item.name}</td>
                  <td>{item.spenDay}</td>
                  <td>{item.pay ? "Rồi" : "Chưa"}</td>
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
export default Order;
