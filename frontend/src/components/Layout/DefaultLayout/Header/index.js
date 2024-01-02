import styles from './style.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            <li className={styles.headerNavLi}>
              {/* <p onClick={handleToHome}>Trang chủ</p> */}
              <Link to="/"><p>Trang chủ</p></Link>
              <hr />
            </li>
            <li className={styles.headerNavLi}>
              <Link to="/news"><p>Tin tức</p></Link>
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
        <Link to="/login">
        <i className={`fa-regular fa-circle-user ${styles.faCircleUser}`}></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
