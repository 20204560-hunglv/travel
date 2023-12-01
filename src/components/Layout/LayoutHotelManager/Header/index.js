import styles from './style.module.css'

const Header = () => {
  const handleToListsHotel = () =>{
    window.location.href = "/hotel-manager/edit-hotel";
  }
  const handleToRegisterHotel = () =>{
    window.location.href = "/hotel-manager/register-hotel";
  }
  const handleToLogin = () =>{
    window.location.href = "/login";
  }
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            <li className={styles.headerNavLi}>
              <p onClick={handleToRegisterHotel}>Đăng ký khách sạn</p>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <p onClick={handleToListsHotel}>Danh sách khách sạn</p>
              <hr />
            </li>
          </ul>
        </nav>
        <i onClick={handleToLogin} className={`fa-regular fa-circle-user ${styles.faCircleUser}`}></i>
      </div>
    </header>
  );
};

export default Header;
