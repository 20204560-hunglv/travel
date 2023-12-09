import styles from "./style.module.css";
import LayoutHotelManager from '../../../components/Layout/LayoutHotelManager'
const EditHotel = () => {
    const data = [
        {
            link: 'https://pix8.agoda.net/hotelImages/775/775065/775065_15101615100036903321.jpg?ca=5&ce=1',
            name: 'Apricot Hotel',
            address: '136 Hàng Trống, Hà Nội, Hà Nội, Việt Nam'
        },
        {
            link: 'https://pix8.agoda.net/hotelImages/10963/-1/931dd78dcc0697ed7bf56f855d023eb1.jpg?ca=9&ce=1',
            name: 'Hotel du Parc Hanoi',
            address: 'Số 84, Phố Trần Nhân Tông, Quận Hai Bà Trưng, Hà Nội, Hà Nội, Việt Nam'
        },
        {
            link: 'https://pix8.agoda.net/hotelImages/5082490/0/01d050584766c6a6a0e5552cad0036c0.jpg?ce=0',
            name: 'Sofitel Legend Metropole Hanoi Hotel',
            address: 'Số 15, Phố Ngô Quyền, Quận Hoàn Kiếm, Hà Nội, Hà Nội, Việt Nam'
        },
        {
            link: 'https://pix8.agoda.net/hotelImages/115/1158452/1158452_16061316220043496351.jpg?ca=6&ce=1',
            name: 'Hanoi La Siesta Hotel Trendy',
            address: '12 Nguyễn Quang Bích, Hà Nội, Hà Nội, Việt Nam'
        },
        {
            link: 'https://pix8.agoda.net/hotelImages/7456087/0/50f61f2c1da0cf84c45b077a0fd11067.jpg?ca=8&ce=1',
            name: 'Melia Hanoi Hotel',
            address: 'Số 44B, Phố Lý Thường Kiệt, Quận Hòan Kiếm, Hà Nội, Hà Nội, Việt Nam'
        },
    ]
  return (
    <LayoutHotelManager>
      <div className={styles.main}>
        <h2>Danh sách khách sạn</h2>
        <div className={styles.search}>
          <input placeholder="Tìm kiếm"></input>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th> {/* image */}
              <th>Tên khách sạn</th>
              <th>Địa chỉ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td><img className={styles.img} src={item.link} /></td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td className={styles.icons}>
                    <i className="fa-solid fa-pen"></i>
                    <i className="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </LayoutHotelManager>
  );
};
export default EditHotel;
