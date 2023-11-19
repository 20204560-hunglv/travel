import styles from './style.module.css'

const Header = () => {
  const handleToNews = () =>{
    window.location.href = "/news";
  }
  const handleToHome = () =>{
    window.location.href = "/";
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
              <p onClick={handleToHome}>Du lịch</p>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <p onClick={handleToNews}>Tin tức</p>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <p>Khuyến mãi</p>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <p>Liên hệ</p>
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
