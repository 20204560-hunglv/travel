import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import CrudUserModal from "../../../components/Modal/CRUDUserModal";
import {
  getAll,
  deleteUser,
  create as createUser,
} from "../../../Services/UserServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableUser from "../../../components/Table/TableUser";

const CrudUser = () => {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [dataEdit] = useState({});

  const handleChangeIsAdd = (value) => {
    setIsAdd(value);
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
  }, [isAdd]);

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setData((prevData) => prevData.filter((user) => user._id !== id));
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleAddData = async ({
    fullName,
    username,
    password,
    email,
    address,
    gender,
  }) => {
    try {
      await createUser({
        fullName,
        username,
        password,
        email,
        address,
        gender,
      });
      handleNotify("success", "", "Tạo tài khoản thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error);
    }
  };

  return (
    <>
      <ReactNotifications />
      <LayoutAdmin>
        {isAdd ? (
          <CrudUserModal
            handleSaveData={handleAddData}
            handleChangeFalse={handleChangeIsAdd}
          />
        ) : (
          <>
            <HeaderResult handleClickAdd={() => handleChangeIsAdd(true)} />
            <TableUser data={data} handleDeleteUser={handleDeleteUser} />
          </>
        )}
      </LayoutAdmin>
    </>
  );
};
export default CrudUser;
