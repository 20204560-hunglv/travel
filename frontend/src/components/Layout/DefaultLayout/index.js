import Header from "./Header/index";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
