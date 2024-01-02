import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register";
import Home from "./pages/Home/index";
import News from "./pages/News";
import Booking from "./pages/Booking";
import Search from "./pages/Search";
import CrudUser from "./pages/Admin/CrudUser";
import CrudTour from "./pages/Admin/CrudTour";
import ResponHotel from "./pages/Admin/ResponHotel";
import Order from "./pages/Admin/Order";
import RegisterHotel from "./pages/HotelManager/RegisterHotel";
import EditHotel from "./pages/HotelManager/EditHotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin/crud-user" element={<CrudUser />} />
        <Route path="/admin/crud-tour" element={<CrudTour />} />
        <Route path="/admin/hotel" element={<ResponHotel />} />
        <Route path="/admin/order" element={<Order />} />
        <Route
          path="/hotel-manager/register-hotel"
          element={<RegisterHotel />}
        />
        <Route path="/hotel-manager/edit-hotel" element={<EditHotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
