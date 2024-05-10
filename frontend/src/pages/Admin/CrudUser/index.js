import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import CrudUserModal from "../../../components/Modal/CRUDUserModal";
import ConfirmDelete from "../../../components/Modal/ConfirmDelete";
import { getAll, deleteUser } from "../../../Services/UserServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableUser from "../../../components/Table/TableUser";

const CrudUser = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [dataEdit] = useState({});
  const [showDeletePopup, setDeletePopup] = useState(false);
  const [del, setDel] = useState(false);
  const [id] = useState();

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
      deleteUser(id)
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
        <CrudUserModal data={dataEdit} handleChangeFalse={handleChangeFalse} />
      ) : (
        <>
          <HeaderResult setChange={() => setChange(true)} />
          {/* <table className="max-w-6xl divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên tài khoản
                </th>
                <th className="px-6 w-1/3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 w-1/3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Địa chỉ
                </th>
                <th className="w-1/12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {truncateStringEmail(item.email)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {truncateString(item.address)}
                    </span>
                  </td>
                  <td className="pl-6 pr-2 py-4 whitespace-nowrap">
                    <button
                      onClick={() => {
                        setDataEdit({
                          _id: item._id,
                          userName: item.username,
                          password: item.password,
                          fullName: item.fullname,
                          email: item.email,
                          address: item.address,
                          gender: item.gender,
                        });
                        setChange(true);
                      }}
                      className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setDataEdit({
                          userName: "",
                          password: "",
                          fullName: "",
                          email: "",
                          address: "",
                          gender: "",
                        });
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
          <TableUser data={data} />
          {showDeletePopup && (
            <ConfirmDelete setShow={setDeletePopup} setDel={setDel} />
          )}
        </>
      )}
    </LayoutAdmin>
  );
};
export default CrudUser;
