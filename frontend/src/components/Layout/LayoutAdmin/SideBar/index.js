import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  let location = useLocation();
  const list = [
    { pathName: "/admin/crud-user", label: "Người dùng" },
    { pathName: "/admin/crud-tour", label: "Tour" },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("adminData");
    navigate("/admin");
  };
  return (
    <div className="h-full w-full relative flex flex-col justify-between border-r-2">
      <div className="w-full">
        <div className="flex w-full items-end justify-center">
          <div>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#64adf2"
              stroke="#64adf2"
              strokeWidth="0.0002"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.32"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                <g>
                  {" "}
                  <path d="M16 8.5l1.53 1.53-1.06 1.06L10 4.62l-6.47 6.47-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-gray-700">Admin</h3>
        </div>
        <div className="relative my-5 w-full">
          <div className="flex items-center w-full flex-col font-medium ">
            {list.map((item, index) => (
              <Link to={`${item.pathName}`} key={index} className="w-full">
                <div
                  className={`rounded-md w-4/5 mx-auto minw-120 font-bold
            ${location.pathname === item.pathName ? "bg-neutral-300" : ""}
            hover:bg-neutral-300 `}
                >
                  <div className="text-inherit select-none flex justify-center items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                    <div></div>
                    <p className="flex text-inherit items-center flex-grow text-sm">
                      {item.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {/* <!-- menu item --> */}
          </div>
        </div>
      </div>
      <p
        className="w-3/4 mx-auto py-1 text-center bg-blue-400 hover:bg-blue-300 text-white cursor-pointer mb-5 rounded-md"
        onClick={handleClick}
      >
        Đăng xuất
      </p>
    </div>
  );
};
export default SideBar;
