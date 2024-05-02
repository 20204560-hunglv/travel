import SideBar from "./SideBar";
import Search from "./Search";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="h-screen col-span-1">
          <SideBar />
        </div>
        <div className={`w-full col-span-5`}>
          <div className="mx-5">
            <div>
              <Search />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
