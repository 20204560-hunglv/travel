import { useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../Notification/index";
import { update as updateUser } from "../../../Services/UserServices";

const CrudUserModal = ({
  handleSaveData,
  handleChangeFalse,
  data,
  title = "Thêm tài khoản",
}) => {
  const [fullName, setFullName] = useState((data && data.fullName) || "");
  const [username, setUserName] = useState((data && data.userName) || "");
  const [password, setPassword] = useState((data && data.password) || "");
  const [email, setEmail] = useState((data && data.email) || "");
  const [address, setAddress] = useState((data && data.address) || "");
  const [gender, setGender] = useState((data && data.gender) || "");

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleSave = () => {
    handleSaveData({ fullName, username, password, email, address, gender });
    // updateUser(data._id, {
    //   passWord: password,
    //   fullName: fullName,
    //   email: email,
    //   address: address,
    //   gender: gender,
    // })
    //   .then(() => {
    //     handleNotify("success", "Thành công", "Lưu thông tin thành công!");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center">
      <ReactNotifications />
      <div className="w-full max-w-sm container mx-auto py-10">
        <h2 className="text-2xl text-center text-gray-900 pb-5">{title}</h2>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs
           font-bold mb-2"
          >
            Tên tài khoản
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={username}
            onChange={handleUserName}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Mật khẩu
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Họ và tên
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={fullName}
            onChange={handleFullName}
          />
        </div>
        <div className="w-full md:w-full mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Giới tính
          </label>
          <div className="flex">
            <div className="flex items-center mb-4">
              <input
                id="gender-radio-1"
                type="radio"
                value="nam"
                name="gender-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                onChange={handleGender}
                checked={gender === "nam"}
              />
              <label
                htmlFor="gender-radio-1"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Nam
              </label>
            </div>
            <div className="flex items-center mb-4 ml-4">
              <input
                id="gender-radio-2"
                type="radio"
                value="nu"
                checked={gender === "nu"}
                onChange={handleGender}
                name="gender-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                 focus:ring-blue-500"
              />
              <label
                htmlFor="gender-radio-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Nữ
              </label>
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="location"
          >
            Địa chỉ
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            type="text"
            value={address}
            onChange={handleAddress}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="mt-5 bg-green-400 w-full hover:bg-green-500 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleSave()}
          >
            Lưu
          </button>
        </div>
        <div
          onClick={() => handleChangeFalse(false)}
          className="text-center mt-4 text-gray-500 cursor-pointer"
        >
          <div>Hủy</div>
        </div>
      </div>
    </div>
  );
};

export default CrudUserModal;
