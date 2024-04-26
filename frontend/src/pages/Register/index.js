import DefaultLayout from "../../components/Layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { handleNotify } from "../../components/Notification/index";
import { ReactNotifications } from "react-notifications-component";
import { signUp } from "../../Services/AuthServices";

const LoginInputArea = ({ title, name, change, value }) => {
  const chooseShow = () => {
    const checkbox = document.getElementById(`${name}CheckBox`);
    var passwordInput = document.getElementById(`${name}`);

    if (checkbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
  return (
    <div className={`flex flex-col m-auto`}>
      <div className="flex justify-between">
        <p className="text-sm pl-1">{title}</p>
        <div className="flex justify-between items-center">
          <p className="mr-1 text-xs">Hiện</p>
          <input
            type="checkbox"
            id={`${name}CheckBox`}
            onChange={() => chooseShow()}
          />
        </div>
      </div>
      <input
        className="border border-solid outline-none w-400 border-ADADAD focus:border-gray-700 h-10 pl-3 pr-3 text-base text-gray-700 mt-1 mb-8 rounded-lg"
        type="password"
        name={name}
        id={name}
        minLength="8"
        onChange={change}
        value={value}
      />
    </div>
  );
};
const Register = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const changeNewPass = (event) => {
    setNewPass(event.target.value);
  };
  const handleToSubmit = () => {
    if (!name || !pass || !newPass)
      handleNotify("Warning", "Warning", "Cần nhập đầy đủ thông tin");
    else if (pass !== newPass)
      handleNotify("Warning", "Warning", "Mật khẩu không giống nhau");
    else {
      try {
        signUp(name, pass);
        setName("");
        setPass("");
        setNewPass("");
        handleNotify("success", "Thành công", "Đăng ký thành công!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={`my-16`}>
        <div
          className={`text-666666 m-auto flex flex-col justify-center w-max rounded-lg `}
        >
          <div>
            <header className="text-center mb-5">
              <h1 className="text-4xl font-bold mb-3 text-333333">
                Tạo tài khoản
              </h1>
              <div className="flex justify-center">
                <p className="text-sm mr-1">Đã có tài khoản?</p>
                <div
                  className="text-center text-sm font-bold w-max cursor-pointer 
          transition-colors hover:text-neutral-500 text-333333"
                >
                  <Link to="/login">Đăng nhập</Link>
                </div>
              </div>
            </header>
            <div>
              <fieldset className={`flex flex-col justify-between`}>
                <div className={`flex flex-col m-auto `}>
                  <p className="text-sm pl-1">Tên đăng nhập</p>
                  <input
                    className=" border border-solid outline-none w-400 border-ADADAD focus:border-gray-700 h-10 pl-3 pr-3 text-base text-gray-700 mt-1 mb-8 rounded-lg"
                    type="text"
                    name="username"
                    id="username"
                    onChange={changeName}
                    value={name}
                  />
                </div>
                <LoginInputArea
                  title="Mật khẩu"
                  name="password"
                  change={changePass}
                  value={pass}
                />
                <LoginInputArea
                  title="Xác nhận mật khẩu"
                  name="confirmPass"
                  change={changeNewPass}
                  value={newPass}
                />
              </fieldset>
              <fieldset className={`h-10 ml-auto mr-auto justify-center mt-5`}>
                <button
                  type="button"
                  className="px-5 py-2 w-full bg-C3C3C3 rounded-3xl text-white cursor-pointer 
              transition-colors border-none hover:bg-gray-500"
                  onClick={() => handleToSubmit()}
                >
                  Đăng ký
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Register;
