import Header from "./Header/index";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="min-h-630">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
