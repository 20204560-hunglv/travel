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
import NotFound from "./pages/NotFound/notFound";
import ChangePass from "./pages/ChangePass";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import HistoryBooking from "./pages/HistoryBooking";
import ScrollToTop from "./components/ScrollToTop";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { viVN } from "@mui/material/locale";
import Checkout from "./pages/Checkout";
import CrudGuide from "./pages/Admin/CrudGuide/index";
import CrudHotel from "./pages/Admin/CrudHotel/index";
import CrudDiscount from "./pages/Admin/CrudDiscount/index";
import CrudOrder from "./pages/Admin/CrudOrder/index";
import Discount from "./pages/Discount";

const App = () => {
  const theme = createTheme(
    {
      palette: {
        primary: { main: "#1976d2" },
      },
    },
    viVN,
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <CssBaseline />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tour/:id" element={<Tour />} />
          <Route path="/discount" element={<Discount />} />

          <Route path="/search">
            <Route index element={<Search />} />
            <Route path="page/:page" element={<Search />} />
          </Route>

          <Route element={<ProtectRouterUser />}>
            <Route path="/history-booking" element={<HistoryBooking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-pass" element={<ChangePass />} />
            <Route path="/checkout/:tourId" element={<Checkout />} />
          </Route>

          <Route path="/admin">
            <Route index element={<LoginAdmin />} />
            <Route element={<ProtectRouterAdmin />}>
              <Route path="crud-user" element={<CrudUser />} />
              <Route path="crud-tour" element={<CrudTour />} />
              <Route path="crud-guide" element={<CrudGuide />} />
              <Route path="crud-hotel" element={<CrudHotel />} />
              <Route path="crud-discount" element={<CrudDiscount />} />
              <Route path="crud-order" element={<CrudOrder />} />
            </Route>
          </Route>

          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
