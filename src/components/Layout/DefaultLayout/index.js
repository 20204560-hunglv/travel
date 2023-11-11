import Header from "./Header/index";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
