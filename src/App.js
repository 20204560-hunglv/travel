import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register";
import Home from "./pages/Home/index";
import News from "./pages/News";
import Booking from "./pages/Booking";
import Search from "./pages/Search";
import CrudUser from './pages/Admin/CrudUser'
import CrudTour from './pages/Admin/CrudTour'
import ResponHotel from "./pages/Admin/ResponHotel";
import Order from "./pages/Admin/Order";
import RegisterHotel from "./pages/HotelManager/RegisterHotel";

const App = () => {
  const handleLogin = () => {
    window.location.href = "/register";
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onclick={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin/crud-user" element={<CrudUser />} />
        <Route path="/admin/crud-tour" element={<CrudTour />} />
        <Route path="/admin/hotel" element={<ResponHotel />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/hotel-manager/register-hotel" element={<RegisterHotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
