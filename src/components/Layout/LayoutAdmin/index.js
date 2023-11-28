import SideBar from "./SideBar";
import Search from "./Search";
import styles from "./style.module.css";
const LayoutAdmin = ({ children }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.content}>
          <div className={styles.search}>
            <Search />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
export default LayoutAdmin;
