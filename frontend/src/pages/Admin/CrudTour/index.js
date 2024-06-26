import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useEffect, useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import CrudTourModal from "../../../components/Modal/CRUDTourModal";
import {
  add as addTour,
  deleteTour,
  getAllByAdmin,
  update as EditTour,
} from "../../../services/TourServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableTour from "../../../components/Table/TableTour";

const CrudTour = () => {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tourEdit, setTourEdit] = useState({});

  const handleChangeIsAdd = (value) => {
    setIsAdd(value);
  };
  const handleChangeIsEdit = (value) => {
    setIsEdit(value);
  };
  const handleEditTour = (data) => {
    setTourEdit(data);
    handleChangeIsEdit(true);
  };

  const fetchData = async () => {
    try {
      const response = await getAllByAdmin();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [isAdd]);

  const handleDeleteTour = async (id) => {
    try {
      await deleteTour(id);
      await fetchData();
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddData = async (data) => {
    try {
      await addTour(data);
      handleChangeIsAdd(false);
      handleNotify("success", "", "Tạo tài tour thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error);
    }
  };
  const handleEditData = async (data) => {
    try {
      await EditTour(tourEdit._id, data);
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
          <CrudTourModal
            handleBack={handleBackFromAdd}
            handleSaveData={handleAddData}
          />
        )}
        {isEdit && (
          <CrudTourModal
            title="Thông tin chuyến du lịch"
            data={tourEdit}
            handleSaveData={handleEditData}
            handleBack={handleBackFromEdit}
          />
        )}
        {!isAdd && !isEdit && (
          <>
            <HeaderResult
              title="Danh sách tour"
              handleClickAdd={() => handleChangeIsAdd(true)}
            />
            <TableTour
              data={data}
              handleDeleteTour={handleDeleteTour}
              handleEditTour={handleEditTour}
            />
          </>
        )}
      </LayoutAdmin>
    </>
  );
};
export default CrudTour;
