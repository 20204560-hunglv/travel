import {getUserLocal} from "../../utils/LocalStorage";
import {Outlet} from "react-router-dom";
import Login from "../../pages/Login/Login";

const ProtectRouterUser = () => {
  const dataUser = getUserLocal();

  return dataUser ? <Outlet /> : <Login />;
};

export default ProtectRouterUser;
