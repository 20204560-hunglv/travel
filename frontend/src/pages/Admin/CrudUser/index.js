import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import CrudUserModal from "../../../components/Modal/CRUDUserModal";
import { getAll, deleteUser } from "../../../Services/UserServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableUser from "../../../components/Table/TableUser";

const CrudUser = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [dataEdit] = useState({});

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

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setData((prevData) => prevData.filter((user) => user._id !== id));
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReactNotifications />
      <LayoutAdmin>
        {change ? (
          <CrudUserModal
            data={dataEdit}
            handleChangeFalse={handleChangeFalse}
          />
        ) : (
          <>
            <HeaderResult setChange={() => setChange(true)} />
            <TableUser data={data} handleDeleteUser={handleDeleteUser} />
          </>
        )}
      </LayoutAdmin>
    </>
  );
};
export default CrudUser;
