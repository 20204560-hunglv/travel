import Header from "./Header";
import Footer from "../DefaultLayout/Footer";

const LayoutHotelManager = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutHotelManager;