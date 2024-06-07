import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, {useState, useEffect} from "react";
import {ReactNotifications} from "react-notifications-component";
import {handleNotify} from "../../../components/Notification/index";
import CrudUserModal from "../../../components/Modal/CRUDUserModal";
import {
    getAll,
    deleteUser,
    create as createUser,
    update as editUser,
} from "../../../services/UserServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableUser from "../../../components/Table/TableUser";

const CrudUser = () => {
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
            await deleteUser(id);
            await fetchData();
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
                                     numberPhone,
                                     address,
                                     gender,
                                     birthDate,
                                 }) => {
        try {
            await createUser({
                fullName,
                username,
                password,
                email,
                numberPhone,
                address,
                gender,
                birthDate,
            });
            handleChangeIsAdd(false);
            handleNotify("success", "", "Tạo tài khoản thành công");
        } catch (error) {
            console.log(error);
            handleNotify("warning", "", error);
        }
    };

    const handleEditData = async ({
                                      fullName,
                                      username,
                                      password,
                                      email,
                                      numberPhone,
                                      address,
                                      gender,
                                      birthDate,
                                  }) => {
        try {
            await editUser(userEdit._id, {
                fullName,
                username,
                password,
                email,
                numberPhone,
                address,
                gender,
                birthDate
            });
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
                    <CrudUserModal
                        handleSaveData={handleAddData}
                        handleBack={handleBackFromAdd}
                    />
                )}
                {isEdit && (
                    <CrudUserModal
                        title="Thông tin tài khoản"
                        handleSaveData={handleEditData}
                        handleBack={handleBackFromEdit}
                        data={userEdit}
                    />
                )}
                {!isAdd && !isEdit && (
                    <>
                        <HeaderResult handleClickAdd={() => handleChangeIsAdd(true)}/>
                        <TableUser
                            data={data}
                            handleDeleteUser={handleDeleteUser}
                            handleEditUser={handleEditUser}
                        />
                    </>
                )}
            </LayoutAdmin>
        </>
    );
};
export default CrudUser;
