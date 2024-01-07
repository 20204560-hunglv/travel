import styles from "./style.module.css";
import {useNavigate} from 'react-router-dom'
import axios from '../../../utils/axios'
import { useEffect, useState } from "react";
import currencyVnd from "../../../utils/curencyVnd";

const SearchItem = ({item}) => {
  const navigate = useNavigate()
  const handleToBooking = () => {
    navigate(`/tour/${item._id}`);
  };
  return (
    <div
    onClick={handleToBooking}
    className="rounded-lg cursor-pointer w-1/4 transition-shadow hover:shadow-lg hover:shadow-slate-700">
      <img src={item.main_image_url} className="h-44 w-full"></img>
      <div className={styles.saledescribe}>
        <p className={styles.saleitemtimecreate}>{item.start_time}</p>
        <p className={styles.saleitemcontent}>{item.name}</p>
        <p className={styles.saleitemprice}>{currencyVnd(item.prices)}</p>
      </div>
      <div></div>
    </div>
  );
};
const Result = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData =()=>{
    axios.get('/api/v1/tours')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  }
  return (
    <div className={styles.contain}>
      <div className={styles.search}>
        {data.map((item,index)=>(
          <SearchItem key={index}
            item = {item}
          />
        ))}
      </div>
    </div>
  );
};
export default Result;
