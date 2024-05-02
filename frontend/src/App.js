import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRouterAdmin from "./components/ProtectRouterAdmin";
import ProtectRouterUser from "./components/ProtectRouterUser";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register";
import Home from "./pages/Home/index";
import Tour from "./pages/Tour";
import Search from "./pages/Search";
import CrudUser from "./pages/Admin/CrudUser";
import CrudTour from "./pages/Admin/CrudTour";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound/notFound";
import ChangePass from "./pages/ChangePass";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import HistoryBooking from "./pages/HistoryBooking";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/:id" element={<Tour />} />
        <Route path="/search" element={<Search />} />

        <Route element={<ProtectRouterUser />}>
          <Route path="/history-booking" element={<HistoryBooking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-pass" element={<ChangePass />} />
        </Route>

        <Route path="/admin">
          <Route index element={<LoginAdmin />} />
          <Route element={<ProtectRouterAdmin />}>
            <Route path="crud-user" element={<CrudUser />} />
            <Route path="crud-tour" element={<CrudTour />} />
          </Route>
        </Route>

        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
