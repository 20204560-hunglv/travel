import { getAdminLocal } from "../../utils/getLocalStorage";
import NotFound from "../NotFound/notFound";
import { Outlet } from "react-router-dom";

const ProtectRouterAdmin = () => {
  const dataAdmin = getAdminLocal();

  return dataAdmin ? <Outlet /> : <NotFound />;
};

export default ProtectRouterAdmin;