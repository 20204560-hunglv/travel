import { useState } from "react";
import styles from "./style.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import citys from "../../../utils/citys";

const Banner = () => {
  const cityLabels = citys;
  const [countryFrom, setCountryFrom] = useState();
  const [countryTo, setCountryTo] = useState();
  const [numberDate, setNumberDate] = useState(0);
  const handleFrom = (event) => {
    setCountryFrom(event.target.value);
  };
  const handleTo = (event) => {
    setCountryTo(event.target.value);
  };
  const handleNumberDate = (event) => {
    setNumberDate(event.target.value);
  };
  const [date, onChange] = useState();
  const [active, setActive] = useState({
    tour: true,
    hotel: false,
  });
  const handleActive = (detailName) => {
    setActive((prevState) => ({
      tour: false,
      hotel: false,
      [detailName]: true,
    }));
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search", {
      state: {
        from: countryFrom,
        to: countryTo,
        start: date,
        period: numberDate,
      },
    });
    // console.log(query);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchPic}></div>
      <div className={styles.searchChoose}>
        <nav>
          <ul className={styles.searchChooseNav}>
            <li
              onClick={() => {
                handleActive("tour");
              }}
              className={`${styles.searchChooseNavLi} ${
                active.tour ? "bg-white text-3a7bd5" : "text-white bg-inherit"
              } font-bold`}
            >
              Tour du lịch
            </li>
            {/* <li
              onClick={() => {
                handleActive("hotel");
              }}
              className={`${styles.searchChooseNavLi} ${
                active.hotel ? "bg-white text-3a7bd5" : "text-white bg-inherit"
              } font-bold`}
            >
              Khách sạn
            </li> */}
          </ul>
        </nav>
        <div className={styles.searchChooseContent}>
          {active.tour && (
            <div className="h-40">
              <p className={styles.searchChooseP}>Tìm kiếm tour phù hợp</p>
              <div className={styles.searchChooseFilter}>
                <div className=" flex items-center justify-around py-1 px-5 border-4 border-yellow-200 rounded-2xl h-20">
                  <i className="fa-solid fa-location-dot mr-2"></i>
                  <div>
                    <label
                      htmlFor="countriesFrom"
                      className=" ml-4 mb-2 text-sm font-medium"
                    >
                      Điểm đi
                    </label>
                    <select
                      value={countryFrom}
                      onChange={handleFrom}
                      id="countriesFrom"
                      className="bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Chọn địa phương</option>
                      {cityLabels.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <i className={`fa-solid fa-right-left`}></i>
                <div className=" flex items-center justify-between py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20">
                  <i className="fa-solid fa-location-dot mr-2"></i>
                  <div>
                    <label
                      htmlFor="countriesTo"
                      className="mb-2 ml-4 text-sm font-medium"
                    >
                      Điểm đến
                    </label>
                    <select
                      value={countryTo}
                      onChange={handleTo}
                      id="countriesTo"
                      className="bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Chọn địa phương</option>
                      {cityLabels.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20">
                  <div>
                    <span>Ngày đi</span>
                  </div>
                  <div className="h-18">
                    <DatePicker onChange={onChange} value={date} />
                  </div>
                </div>
                <div className=" flex items-center justify-around py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20">
                  <div>
                    <label
                      htmlFor="number-input"
                      className="mb-2 text-sm font-medium text-gray-900"
                    >
                      Số ngày
                    </label>
                    <input
                      onChange={handleNumberDate}
                      value={numberDate}
                      type="number"
                      id="number-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5"
                      placeholder="0"
                      min={0}
                    />
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-yellow-300 py-4 px-5 rounded-lg cursor-pointer"
                  // to="/search"
                >
                  <i className={`fa-solid fa-right-long text-white`}></i>
                </div>
              </div>
            </div>
          )}
          {active.hotel && <div className="h-40"></div>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
