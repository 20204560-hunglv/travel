import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import { useEffect, useState } from "react";
import HeaderResult from "./../../../components/Layout/LayoutAdmin/HeaderResult/index";
import * as OrderServices from "../../../services/OrderServices";
import TableOrder from "./../../../components/Table/TableOrder/index";
import CRUDOrderModal from "./../../../components/Modal/CRUDOrderModal/index";

export default function CrudOrder() {
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
      const orders = await OrderServices.get();
      setData(orders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAdd]);

  const handleDeleteUser = async (id) => {
    try {
      await OrderServices.remove(id);
      await fetchData();
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddData = async (data) => {
    try {
      await OrderServices.create(data);
      handleChangeIsAdd(false);
      handleNotify("success", "", "Tạo thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error);
    }
  };

  const handleEditData = async (data) => {
    try {
      await OrderServices.edit({ id: userEdit._id, data });
      handleNotify("success", " ", "Chỉnh sửa thành công");
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
          <CRUDOrderModal
            title="Thêm order tour"
            handleSaveData={handleAddData}
            handleBack={handleBackFromAdd}
          />
        )}
        {isEdit && (
          <CRUDOrderModal
            title="Thông tin order tour"
            handleSaveData={handleEditData}
            handleBack={handleBackFromEdit}
            data={userEdit}
          />
        )}
        {!isAdd && !isEdit && (
          <>
            <HeaderResult
              title="Danh sách đặt tour"
              handleClickAdd={() => handleChangeIsAdd(true)}
            />
            <TableOrder
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
