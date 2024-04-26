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
      <div className={`w-4/5 mx-auto`}>
        <table className="pl-5 mt-10 w-full border-collapse">
          <thead>
            <tr className="hover:bg-gray-200">
              <th className="text-left">ID</th>
              <th className="text-left">Tên tour</th>
              <th className="text-left">Ngày đặt</th>
              <th className="text-left">Đã thanh toán?</th>
              <th className="text-left">Trạng thái</th>
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr className="hover:bg-gray-200" key={item.ID}>
                  <td className="py-2">{item.ID}</td>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.spenDay}</td>
                  <td className="py-2">{item.pay ? "Rồi" : "Chưa"}</td>
                  <td className="py-2">{item.status}</td>
                  <td className={`py-2`}>
                    <i
                      className="fa-solid fa-circle-check cursor-pointer p-2 rounded hover:bg-indigo-600 text-white"
                      style={{ color: "#71BE34" }}
                    ></i>
                    <i
                      className="fa-solid fa-circle-xmark cursor-pointer p-2 rounded hover:bg-indigo-600 text-white"
                      style={{ color: "#FF623D" }}
                    ></i>
                    <i className="fa-solid fa-trash cursor-pointer p-2 rounded hover:bg-indigo-600 text-white"></i>
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
