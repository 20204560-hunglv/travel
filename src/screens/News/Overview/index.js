import styles from './style.module.css'

const Item = (props) => {
    return (
        <div className={styles.itemsmall}>
            <img src={props.link}/>
            <a>{props.title}</a>
        </div>
    )
}
const Overview = () =>{
    const lists = [
        {
            link: "https://media.vietravel.com/images/news/du-lich-chiang-mai-00.png",
            title: "Du lịch Chiang Mai mùa xuân, ngắm rừng đào mười dặm"
        },
        {
            link: "https://media.vietravel.com/images/news/du-lich-philippines244.png",
            title: "Cẩm nang du lịch Philippines mùa xuân từ a-z"
        },
        {
            link: "https://media.vietravel.com/images/news/du-lich-bangkok-thai-lan-mua-xuan.jpg",
            title: "Khám phá Bangkok Thái Lan - Thành phố sôi động vào mùa xuân"
        },
    ]
    return (
        <div className={styles.contain}>
            <div className={styles.large}>
                <img src='https://media.vietravel.com/images/news/du-lich-le-hoi-nghe-thuat-va-am-nhac-mua-xuan-tai-phu-quoc.jpg' />
                <h1>Hòa mình vào lễ hội nghệ thuật và âm nhạc mùa xuân tại Phú Quốc</h1>
            </div>
            <div className={styles.small}>
              {
                lists.map((item,index) => (
                    <Item key={index} link={item.link} title={item.title} />
                ))
              }
            </div>
        </div>
    )
}
export default Overview