import styles from './style.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            <li className={styles.headerNavLi}>
              <p>Du lịch</p>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <p>Tin tức</p>
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
        <i className={`fa-regular fa-circle-user ${styles.faCircleUser}`}></i>
      </div>
    </header>
  );
};

export default Header;
