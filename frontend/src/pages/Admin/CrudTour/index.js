import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import axios from "../../../utils/axios";
import CrudTourModal from "../../../components/Modal/CRUDTourModal";
import ConfirmDelete from "../../../components/Modal/ConfirmDelete";

const CrudTour = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [typeChange, setTypeChange] = useState("");
  const [showDeletePopup, setDeletePopup] = useState(false);
  const [id, setId] = useState();
  const [dataEdit, setDataEdit] = useState({});
  const [del, setDel] = useState(false);
  const handleChangeFalse = () => {
    setChange(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/tours");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [change]);
  useEffect(() => {
    if (del) {
      axios
      .delete(`/api/v1/tours/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((user) => user._id !== id));
        handleNotify("success", "Thành công", "Xóa thành công");
      })
      .catch((err) => console.log(err));
      setDel(false);
    }
  }, [del,id]);
  const handleDelete = (_id) => {
    setDeletePopup(true);
    setId(_id);
  };
  // Neu >= 45 ky tu, thi thay the bang 3 cham
  function truncateString(str) {
    if (str.length >= 45) {
      return str.slice(0, 42) + '...';
    } else {
      return str;
    }
  }
  return (
    <div>
      <ReactNotifications />
      {change ? (
        <CrudTourModal
          type={typeChange}
          data={dataEdit}
          handleChangeFalse={handleChangeFalse}
        />
      ) : (
        <LayoutAdmin>
          <div className="flex items-center justify-end my-7">
            <div className="px-4 ">
                <button
                  onClick={() => {
                    setDataEdit({
                      name: "",
                      period: "",
                      startTime: "",
                      urlImage: "",
                      prices: "",
                      addressFrom: "",
                      addressTo: "",
                    });
                    setTypeChange("add");
                    setChange(true);
                  }}
                  className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <span className="pl-2">Thêm</span>
                </button>
            </div>
          </div>
          <table className="mr-0 pr-0 max-w-6xl w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên tour
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Giá
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngời khởi hành
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số ngày
                </th>
                <th className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white max-w-6xl divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {truncateString(item.name)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.prices}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {item.start_time}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.period}</td>
                  <td className="pl-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => {
                        setDataEdit({
                          _id: item._id,
                          name: item.name,
                          period: item.period,
                          startTime: item.start_time,
                          urlImage: item.main_image_url,
                          prices: item.prices,
                          addressFrom: item.addressFrom,
                          addressTo: item.addressTo,
                        });
                        setTypeChange("edit");
                        setChange(true);
                      }}
                      className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                      className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showDeletePopup && (
            <ConfirmDelete setShow={setDeletePopup} setDel={setDel} />
          )}
        </LayoutAdmin>
      )}
    </div>
  );
};
export default CrudTour;
