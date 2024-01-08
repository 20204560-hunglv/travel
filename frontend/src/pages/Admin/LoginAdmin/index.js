import { Link, useNavigate } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import { useState } from "react";
import axios from "../../../utils/axios";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const handleToSubmit = () => {
    if (!name || !pass)
      handleNotify("Warning", "Warning", "Cần nhập đầy đủ thông tin");
    else
      axios
        .post("/api/v1/login_admin", {
          username: name,
          password: pass,
        })
        .then((response) => {
          if (response.status === 200) {
            // console.log(response.data.user)
            localStorage.setItem(
              "adminData",
              JSON.stringify(response.data.user)
            );
            navigate("/admin/crud-user");
          } else console.log("Tai khoan khong dung");
        })
        .catch((error) => {
          if (error.response) {
            // Trường hợp máy chủ trả về mã trạng thái 401 (Unauthorized)
            if (error.response.status === 401) {
              handleNotify("warning", "Warning", "Login failed: Unauthorized");
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
  };
  return (
    <div>
      <ReactNotifications />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập với vai trò Admin
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tài khoản
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={name}
                  onChange={changeName}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={pass}
                  onChange={changePass}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleToSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng nhập
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link to="/login" className="underline">
              Đăng nhập với vai trò khách hàng
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginAdmin;
