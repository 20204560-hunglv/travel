import { getUserLocal } from "../../utils/getLocalStorage";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login/Login";

const ProtectRouterUser = () => {
  const dataUser = getUserLocal();

  return dataUser ? <Outlet /> : <Login />;
};

export default ProtectRouterUser;
