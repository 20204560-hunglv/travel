import DefaultLayout from "../Layout/DefaultLayout";
import NotFound from "../NotFound/notFound";

const ValidateLogin = ({ children }) => {
  const storedUserDataString = localStorage.getItem("userData");
  return (
    <div>
      {storedUserDataString ? (
        <DefaultLayout>{children}</DefaultLayout>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export default ValidateLogin;
