import { useLocation } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import styles from "./style.module.css";
import citys from "../../utils/citys";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import currencyVnd from "../../utils/curencyVnd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Choose = (props) => {
  return (
    <div className="font-semibold text-sm mb-4">
      <h5>{props.label}</h5>
      <select
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      >
        <option value="">Chọn địa phương</option>
        {citys.map((city, index) => (
          <option key={index} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>
    </div>
  );
};
const SearchItem = ({ item }) => {
  const navigate = useNavigate();
  const handleToBooking = () => {
    navigate(`/tour/${item._id}`);
  };
  return (
    <div
      onClick={handleToBooking}
      className="rounded-lg cursor-pointer my-4 w-1/4 mx-4-1-percen transition-shadow hover:shadow-lg hover:shadow-slate-700"
    >
      <img src={item.main_image_url} className="h-44 w-full" alt="abc"></img>
      <div className={styles.saledescribe}>
        <p className={styles.saleitemtimecreate}>{item.start_time}</p>
        <p className={styles.saleitemcontent}>{item.name}</p>
        <p className={styles.saleitemprice}>{currencyVnd(item.prices)}</p>
      </div>
      <div></div>
    </div>
  );
};
const Search = () => {
  let location = useLocation().state;
  const [data, setData] = useState([]);
  const [countryFrom, setCountryFrom] = useState(location.from || "");
  const [countryTo, setCountryTo] = useState(location.to);
  const [numberDate, setNumberDate] = useState(location.period);
  const handleFrom = (event) => {
    setCountryFrom(event.target.value);
  };
  const handleTo = (event) => {
    setCountryTo(event.target.value);
  };
  const handlePeriod = (event) => {
    setNumberDate(event.target.value);
  };
  const formatDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  };
  const [date, onChange] = useState(formatDate(location.start) || "");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("/api/v1/tours")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <DefaultLayout>
      <div className="flex min-h-630">
        {/* Search */}
        <div className="bg-gray-100 w-1/4 pt-12">
          <div className="w-4/5 mx-auto">
            <p className={`${styles.filterResult} text-center`}>Lọc kết quả</p>
            <Choose label="ĐIỂM ĐI" value={countryFrom} onChange={handleFrom} />
            <Choose label="ĐIỂM ĐẾN" value={countryTo} onChange={handleTo} />
            <div className="font-semibold w-full text-sm flex items-center justify-between">
              <h5 className="min-w-fit">NGÀY ĐI</h5>
              <div>
                <DatePicker
                  className="py-2 px-3 outline-none text-base font-normal leading-normal bg-white appearance-none"
                  onChange={(date) => onChange(date)}
                  selected={date}
                />
              </div>
            </div>
            <div className="font-semibold text-sm w-full flex items-center justify-between mt-4">
              <h5 className="min-w-fit">SỐ NGÀY</h5>
              <input
                className="border block border-solid border-gray-300 py-2 px-3 outline-none text-base font-normal leading-normal bg-white appearance-none"
                type="number"
                min={0}
                value={numberDate}
                onChange={handlePeriod}
              ></input>
            </div>
            <div className="text-center mt-6 cursor-pointer">
              <div className="py-2 px-5 rounded no-underline bg-slate-400 transition-colors text-blue-900 font-bold hover:bg-blue-900 hover:text-white">
                Tìm kiếm
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className={styles.contain}>
            <div className={styles.search}>
              {data
                .filter((item) => {
                  return (
                    (countryFrom ? countryFrom === item.addressFrom : true) &&
                    (countryTo ? countryTo === item.addressTo : true) &&
                    (date ? date === item.start_time : true) &&
                    (numberDate ? numberDate === item.period : true)
                  );
                })
                .map((item, index) => (
                  <SearchItem key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Search;
