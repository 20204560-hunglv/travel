import styles from "./style.module.css";
import Overview from "../Overview";

const Item = (props) => {
  return (
    <div className={styles.contain}>
      <img src={props.linkImg} />
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
const TravelNews = () => {
  const lists = [
    {
      linkImg: "https://media.vietravel.com/images/news/du-lich-an-do-00.png",
      title: "Du lịch Tam giác vàng Ấn Độ khám phá huyền thoại cổ xưa",
      text: "Ấn Độ nổi tiếng là một trong những quốc gia với nền văn hóa đặc sắc cùng sự giao thoa của nhiều tín ngưỡng tôn giáo khác nhau. Đặc biệt, vùng Tam giác vàng chính là nơi sở hữu nhiều danh lam, thắng cảnh đẹp đẽ mang đặc trưng của quốc gia châu Á này. Du lịch Tam giác vàng Ấn Độ, đừng quên bỏ qua những trải nghiệm này nhé.",
    },
    {
      linkImg:
        "https://media.vietravel.com/images/news/khu-cho-hong-kong-00.png",
      title:
        "Hành trình mua sắm và giải trí tại các khu chợ đêm nổi tiếng của Hồng Kông",
      text: "Hồng Kông, thành phố hiện đại và độc đáo, không chỉ là thiên đường mua sắm mà còn là điểm đến giải trí tuyệt vời, đặc biệt là vào buổi tối khi những khu chợ đêm nổi tiếng bắt đầu sáng đèn và hứa hẹn những trải nghiệm không giới hạn. Du lịch Hồng Kông, đừng quên ghé thăm những khu chợ nổi tiếng dưới đây.",
    },
    {
      linkImg:
        "https://media.vietravel.com/images/news/giang-sinh-han-quoc-00.png",
      title:
        "Du lịch Hàn Quốc dịp Giáng sinh: phong tục, trải nghiệm và lễ hội thú vị",
      text: "Mùa giáng sinh ở Hàn Quốc là khoảnh khắc đặc biệt, khi đất nước này trở nên rực rỡ và ấm áp với vẻ đẹp độc đáo của mình. Những ngày cuối năm, đường phố Hàn Quốc bắt đầu biến hóa thành một khu vườn thần tiên, nơi mà ánh sáng, màu sắc và tình yêu lan tỏa khắp mọi ngóc ngách. Du lịch Hàn Quốc dịp Giáng sinh, hãy cùng tìm hiểu về phong tục và những trải nghiệm thú vị.",
    },
    {
      linkImg:
        "https://media.vietravel.com/images/news/du-lich-tay-bac-mua-xuan.jpg",
      title: "Du lịch Tây Bắc mùa xuân và những trải nghiệm không thể bỏ lỡ",
      text: "Tây Bắc là một vùng đất với vẻ đẹp thiên nhiên hùng vĩ, thơ mộng và đậm đà bản sắc văn hóa dân tộc. Mùa xuân là thời điểm lý tưởng để du lịch Tây Bắc, khi thời tiết mát mẻ, dễ chịu, cảnh sắc thiên nhiên tươi đẹp và ngập tràn sắc hoa.",
    },
    {
      linkImg:
        "https://media.vietravel.com/images/news/dia-diem-du-lich-mien-tay-05.png",
      title: "Bật mí 5 địa điểm du lịch Miền Tây dịp Tết 2024",
      text: "Miền Tây Nam Bộ với khi hậu ôn hòa, quanh năm khí hậu nắng ấm nên việc du lịch, khám phá vùng sông nước này mùa nào cũng rất đẹp. Du lịch miền Tây Tết 2024 hứa hẹn sẽ có nhiều điều trải nghiệm thú vị đặc biệt qua top địa điểm du lịch dưới đây.",
    },
  ];
  return (
    <div>
      <h1 className={styles.title}>TIN TỨC DU LỊCH</h1>
      <Overview />
      {lists.map((item, index) => (
        <div key={index}>
          <Item linkImg={item.linkImg} title={item.title} text={item.text} />
        </div>
      ))}
    </div>
  );
};
export default TravelNews;
