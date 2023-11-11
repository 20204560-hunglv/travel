import styles from './style.module.css'

const Banner = () => {
  return (
    <div className={styles.search}>
        <div className={styles.searchPic}></div>
        <div className={styles.searchChoose}>
          <nav>
            <ul className={styles.searchChooseNav}>
              <li
                className={`${styles.searchChooseNavLi} ${styles.searchChooseNavLiChoose}`}
              >
                Tour du lịch
              </li>
              <li className={styles.searchChooseNavLi}>Khách sạn</li>
              <li className={styles.searchChooseNavLi}>Vé máy bay</li>
              <li className={styles.searchChooseNavLi}>Tra cứu booking</li>
            </ul>
          </nav>
          <div className={styles.searchChooseContent}>
            <p className={styles.searchChooseP}>Tìm kiếm tour phù hợp</p>
            <div className={styles.searchChooseFilter}>
              <div className={styles.searchChooseItem}>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <span>Điểm đi</span>
                  <p>TP. Hồ Chí Minh</p>
                </div>
              </div>
              <i className="fa-solid fa-right-left"></i>
              <div className={styles.searchChooseItem}>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <span>Điểm đến</span>
                  <p>Nghệ An</p>
                </div>
              </div>
              <div className={styles.searchChooseItem}>
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <span>Ngày đi</span>
                  <p>28/10/2023</p>
                </div>
              </div>
              <div className={`${styles.searchChooseItem} ${styles.searchChooseItemDay}`}>
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <span>Số ngày</span>
                  <p>2</p>
                </div>
              </div>
              <i className="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner