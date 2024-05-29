import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import { useEffect, useState } from "react";
import HeaderResult from "./../../../components/Layout/LayoutAdmin/HeaderResult/index";
import {
  get as getAll,
  create as createHotel,
  edit as editHotel,
  remove as removeHotel,
} from "../../../services/HotelServices";
import TableHotel from "../../../components/Table/TableHotel";
import CRUDHotelModal from "../../../components/Modal/CRUDHotelModal";

export default function CrudHotel() {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userEdit, setUserEdit] = useState({});

  const handleChangeIsAdd = (value) => {
    setIsAdd(value);
  };
  const handleChangeIsEdit = (value) => {
    setIsEdit(value);
  };
  const handleUserEdit = (data) => {
    setUserEdit(data);
  };

  const handleEditUser = (user) => {
    handleUserEdit(user);
    handleChangeIsEdit(true);
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
      await removeHotel(id);
      await fetchData();
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddData = async (data) => {
    try {
      await createHotel(data);
      handleChangeIsAdd(false);
      handleNotify("success", "", "Tạo khách sạn thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error);
    }
  };

  const handleEditData = async (data) => {
    try {
      await editHotel({ id: userEdit._id, data });
      handleNotify("success", " ", "Chỉnh sửa tài khoản thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error);
    }
  };

  const handleBackFromAdd = (value) => {
    handleChangeIsAdd(value);
    fetchData();
  };
  const handleBackFromEdit = (value) => {
    handleChangeIsEdit(value);
    fetchData();
  };

  return (
    <>
      <ReactNotifications />
      <LayoutAdmin>
        {isAdd && (
          <CRUDHotelModal
            handleSaveData={handleAddData}
            handleBack={handleBackFromAdd}
          />
        )}
        {isEdit && (
          <CRUDHotelModal
            title="Thông tin khách sạn"
            handleSaveData={handleEditData}
            handleBack={handleBackFromEdit}
            data={userEdit}
          />
        )}
        {!isAdd && !isEdit && (
          <>
            <HeaderResult handleClickAdd={() => handleChangeIsAdd(true)} />
            <TableHotel
              title="Danh sách khách sạn"
              data={data}
              handleDeleteUser={handleDeleteUser}
              handleEditUser={handleEditUser}
            />
          </>
        )}
      </LayoutAdmin>
    </>
  );
}
