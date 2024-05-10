import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import CrudTourModal from "../../../components/Modal/CRUDTourModal";
import ConfirmDelete from "../../../components/Modal/ConfirmDelete";
import { getAll, deleteTour } from "../../../Services/TourServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableTour from "../../../components/Table/TableTour";

const CrudTour = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [typeChange] = useState("");
  const [showDeletePopup, setDeletePopup] = useState(false);
  const [id] = useState();
  const [dataEdit] = useState({});
  const [del, setDel] = useState(false);

  const handleChangeFalse = () => {
    setChange(false);
  };

  const fetchData = async () => {
    try {
      const response = await getAll();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [change]);

  useEffect(() => {
    if (del) {
      deleteTour(id)
        .then(() => {
          setData((prevData) => prevData.filter((user) => user._id !== id));
          handleNotify("success", "Thành công", "Xóa thành công");
        })
        .catch((err) => console.log(err));
      setDel(false);
    }
  }, [del, id]);

  return (
    <LayoutAdmin>
      <ReactNotifications />
      {change ? (
        <CrudTourModal
          type={typeChange}
          data={dataEdit}
          handleChangeFalse={handleChangeFalse}
        />
      ) : (
        <>
          <HeaderResult setChange={() => setChange(true)} />
          {/* <table className="mr-0 pr-0 max-w-6xl w-full divide-y divide-gray-200">
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
          </table> */}
          <TableTour data={data} />
          {showDeletePopup && (
            <ConfirmDelete setShow={setDeletePopup} setDel={setDel} />
          )}
        </>
      )}
    </LayoutAdmin>
  );
};
export default CrudTour;
