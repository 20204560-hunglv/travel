import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import { useEffect, useState } from "react";
import HeaderResult from "./../../../components/Layout/LayoutAdmin/HeaderResult/index";
import TableGuide from "../../../components/Table/TableGuide";
import {
  create as createGuide,
  edit as editGuide,
  get as getAll,
  remove as removeGuide,
} from "../../../services/GuideServices";
import CRUDGuideModal from "../../../components/Modal/CRUDGuideModal";

export default function CrudGuide() {
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
            // console.log(response)
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
            await removeGuide(id);
            await fetchData();
            handleNotify("success", "Thành công", "Xóa thành công");
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddData = async ({
                                     fullName,
                                     email,
                                     numberPhone,
                                     address,
                                     gender,
                                     CCCD,
                                     birthDay,
                                 }) => {
        try {
            await createGuide({
                fullName,
                email,
                numberPhone,
                address,
                gender,
                CCCD,
                birthDay,
            });
            handleChangeIsAdd(false);
            handleNotify("success", "", "Tạo tài khoản thành công");
        } catch (error) {
            console.log(error);
            handleNotify("warning", "", error);
        }
    };

    const handleEditData = async (data) => {
        try {
            await editGuide({id: userEdit._id, dataUpdate: data});
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
            <ReactNotifications/>
            <LayoutAdmin>
                {isAdd && (
                    <CRUDGuideModal
                        handleSaveData={handleAddData}
                        handleBack={handleBackFromAdd}
                    />
                )}
                {isEdit && (
                    <CRUDGuideModal
                        title="Thông tin hướng dẫn viên"
                        handleSaveData={handleEditData}
                        handleBack={handleBackFromEdit}
                        data={userEdit}
                    />
                )}
                {!isAdd && !isEdit && (
                    <>
                        <HeaderResult handleClickAdd={() => handleChangeIsAdd(true)}/>
                        <TableGuide
                            title="Danh sách dướng dẫn viên"
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
