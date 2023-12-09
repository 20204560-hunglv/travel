import { useEffect } from "react";
import styles from "./style.module.css";
const Alert = (props) => {
  useEffect(()=>{
    const iconClose = document.querySelector(`.${styles.toastClose} > i`)
    iconClose.addEventListener("click",props.handleToHideAlert)
    return () => {
      iconClose.removeEventListener("click",props.handleToHideAlert)
    }
  },[])
  return (
    <div className={styles.toast}>
      <div className={styles.toastIcon}>
        <i className="fa-solid fa-circle-check"></i>
      </div>
      <div className={styles.body}>
        <h3>Thành công!</h3>
        <p>Bạn đã đăng ký tài khoản thành công</p>
      </div>
      <div className={styles.toastClose}>
      <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};
export default Alert;
