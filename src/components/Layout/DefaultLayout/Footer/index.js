import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <div className={styles.intro}>
          <p>Giới thiệu</p>
          <a href="">Về công ty</a>
          <a href="">Tuyển dụng</a>
          <a href="">Hệ thống cửa hàng</a>
        </div>
        <div className={styles.services}>
          <p>Dịch vụ khách hàng</p>
          <a href="">Chính sách điều khoản</a>
          <a href="">Hướng dẫn</a>
          <a href="">Q&A</a>
        </div>
        <div className={styles.contact}>
          <p>Liên hệ</p>
          <a href="">Hotline</a>
          <a href="">Email</a>
          <a href="">Live chat</a>
          <a href="">Messenger</a>
          <a href="">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
