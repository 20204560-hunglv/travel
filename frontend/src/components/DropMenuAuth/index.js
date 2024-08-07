"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../Icons";
import { removeLocalStorage } from "../../utils/LocalStorage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DropMenuAuth() {
  const navigate = useNavigate();
  const handleClick = () => {
    removeLocalStorage("userData");
    navigate("/login");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <Menu as="div" className="relative inline-block mr-2">
      <div>
        <Menu.Button className="inline-flex justify-center shadow-sm">
          <div>
            <i className={`fa-regular fa-circle-user text-2xl`}></i>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleProfile}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  <div className="flex items-center">
                    <Icons.Info />
                    <p className="ml-2">Thông tin tài khoản</p>
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    navigate("/change-pass");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  <div className="flex items-center">
                    <Icons.Key />
                    <p className="ml-2">Đổi mật khẩu</p>
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleClick}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  <div className="flex items-center">
                    <Icons.LogOut />
                    <p className="ml-2">Đăng xuất</p>
                  </div>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
