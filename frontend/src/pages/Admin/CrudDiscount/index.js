import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import { useEffect, useState } from "react";
import HeaderResult from "./../../../components/Layout/LayoutAdmin/HeaderResult/index";
import * as DiscountServices from "../../../services/DiscountServices";
import TableDiscount from "./../../../components/Table/TableDiscount/index";
import CRUDDiscountModal from "../../../components/Modal/CRUDDiscountModal";
import { update } from "../../../services/TourServices";

export default function CrudDiscount() {
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
      const response = await DiscountServices.getAllByAdmin();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAdd]);

  const handleDeleteUser = async (id) => {
    try {
      await DiscountServices.remove(id);
      await fetchData();
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddData = async (data) => {
    try {
      const resp = await DiscountServices.create(data);
      const { isActive, tours } = data;
      switch (isActive) {
        case 'true': {
          tours.forEach(async (tourId) => {
            await update(tourId, { discountId: resp.data?._id });
          });
          break;
        }
        case false:
          break;
      }
      handleChangeIsAdd(false);
      handleNotify("success", "", "Tạo thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error);
    }
  };

  const handleEditData = async (data) => {
    try {
      const resp = await DiscountServices.edit({ id: userEdit._id, data });
      const { isActive, tours } = data;
      console.log({ isActive, tours });
      switch (isActive) {
        case 'true': {
          await Promise.all(
            tours.map((tourId) => {
              update(tourId, { discountId: userEdit._id });
            })
          );
          break;
        }
        case 'false': {
          await Promise.all(
            tours.forEach((tourId) => {
              update(tourId, { discountId: "false" });
            })
          );

          break;
        }
      }
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
          <CRUDDiscountModal
            title="Thêm khuyến mãi"
            handleSaveData={handleAddData}
            handleBack={handleBackFromAdd}
          />
        )}
        {isEdit && (
          <CRUDDiscountModal
            title="Thông tin khuyến mãi"
            handleSaveData={handleEditData}
            handleBack={handleBackFromEdit}
            data={userEdit}
          />
        )}
        {!isAdd && !isEdit && (
          <>
            <HeaderResult
              title="Danh sách khuyến mãi"
              handleClickAdd={() => handleChangeIsAdd(true)}
            />
            <TableDiscount
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
