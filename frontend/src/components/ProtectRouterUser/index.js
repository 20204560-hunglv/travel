import { getUserLocal } from "../../utils/getLocalStorage";
import NotFound from "../NotFound/notFound";
import { Outlet } from "react-router-dom";

const ProtectRouterUser = () => {
  const dataUser = getUserLocal();

  return dataUser ? <Outlet /> : <NotFound />;
};

export default ProtectRouterUser;
