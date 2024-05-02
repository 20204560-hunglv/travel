import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import { getUserLocal } from "../../utils/getLocalStorage";
import { changePass } from "../../Services/AuthServices";
import DefaultLayout from "../../components/Layout/DefaultLayout";

const ChangePass = () => {
  const storedUserDataString = getUserLocal();

  const navigate = useNavigate();
  
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handlePass = (event) => {
    setPass(event.target.value);
  };
  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };
  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleSave = () => {
    if (!pass || !newPass || !confirmPass) {
      handleNotify("Warning", "Warning", "Cần nhập đầy đủ thông tin");
    } else if (newPass !== confirmPass) {
      handleNotify("Warning", "Warning", "Mật khẩu mới không giống nhau");
    } else {
      changePass(storedUserDataString._id, {
        pass: pass,
        newPass: newPass,
      })
        .then(() => {
          setPass("");
          setNewPass("");
          setConfirmPass("");
          handleNotify("success", "Thành công", "Đổi mật khẩu thành công!");
        })
        .catch((error) => {
          if (error.response) {
            // Trường hợp máy chủ trả về mã trạng thái 401 (Unauthorized)
            if (error.response.status === 409) {
              handleNotify("warning", "Warning", "Mật khẩu chưa chính xác");
            } else {
              console.log(
                "An error occurred with status code:",
                error.response.status
              );
            }
          } else if (error.request) {
            // Trường hợp yêu cầu được gửi đi nhưng không có phản hồi từ máy chủ
            console.error("No response received from the server");
          } else {
            // Lỗi xảy ra trong quá trình thiết lập yêu cầu
            console.error("An error occurred:", error.message);
          }
        });
    }
  };

  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className="antialiased bg-slate-200 py-4">
        <div className="max-w-lg mx-auto py-10 bg-white px-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium text-center">Đổi mật khẩu</h1>

          <div className="py-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">
                  Mật khẩu hiện tại
                </p>
                <input
                  name="email"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Mật khẩu cũ"
                  value={pass}
                  onChange={handlePass}
                />
              </label>
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Mật khẩu mới</p>
                <input
                  name="email"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Mật khẩu mới"
                  value={newPass}
                  onChange={handleNewPass}
                />
              </label>
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">
                  Nhập lại mật khẩu mới
                </p>
                <input
                  name="email"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Xác nhận mật khẩu"
                  value={confirmPass}
                  onChange={handleConfirmPass}
                />
              </label>
              <button
                onClick={() => handleSave()}
                className="w-full py-3 font-medium text-white bg-blue-500 hover:bg-blue-400 rounded-lg  hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                <span className="text-white">Lưu</span>
              </button>
              <p className="text-center">
                <p
                  onClick={() => navigate(-1)}
                  className="text-gray-800 font-medium inline-flex space-x-1 items-center cursor-pointer"
                >
                  <span>Quay lại</span>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ChangePass;
