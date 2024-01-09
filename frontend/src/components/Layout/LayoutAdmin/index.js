import SideBar from "./SideBar";
import Search from "./Search";
import styles from "./style.module.css";
const LayoutAdmin = ({ children }) => {
  return (
    <>
      <div className='flex'>
        <div className='h-screen fixed w-1/5'>
          <SideBar />
        </div>
        <div className={`w-full ml-20percen max-w-6xl`}>
          <div className={styles.search}>
            {/* <Search /> */}
          </div>
          <div className="ml-15">{children}</div>
        </div>
      </div>
    </>
  );
};
export default LayoutAdmin;
