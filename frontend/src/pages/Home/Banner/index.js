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
  };
  return (
    <div className={`calc-64 bg-F5F7FA flex flex-col justify-center items-center ${styles.main}`}>
      <div className="mb-14">
        <h1 className="font-semibold text-center text-4D4D4D text-7xl">
          Du lịch khắp mọi nơi!
        </h1>
        <p className="text-center text-717171 text-3xl">
          Cung cấp cho bạn những trải nghiệm tuyệt vời.
        </p>
      </div>
      <div className={`h-max py-3 border-b-2 border-4CAF4F`}>
        <div className={`flex justify-around items-center`}>
          <div className=" flex items-center justify-around py-1 px-5 border-2 border-yellow-200 rounded-2xl h-20">
            <i className="fa-solid fa-location-dot mr-2 text-red-400 text-xl"></i>
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
                className="text-404040 bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
          <i className={`text-404040 mx-4 fa-solid fa-right-left`}></i>
          <div className=" flex items-center justify-between py-1 px-7 border-2 border-yellow-200 rounded-2xl h-20">
            <i className="fa-solid fa-location-dot mr-2 text-red-400 text-xl text-base"></i>
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
                className="text-404040 bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
          <div className="py-1 px-7 mx-4 border-2 border-yellow-200 rounded-2xl h-20">
            <div>
              <span>Ngày đi</span>
            </div>
            <div className="h-18 text-404040">
              <DatePicker onChange={onChange} value={date} />
            </div>
          </div>
          {/* <div className=" flex items-center justify-around py-1 px-7 border-4 border-yellow-200 rounded-2xl h-20">
            <div>
              <label
                htmlFor="number-input"
                className="mb-2 text-sm font-medium"
              >
                Số ngày
              </label>
              <input
                onChange={handleNumberDate}
                value={numberDate}
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5"
                placeholder="0"
                min={0}
              />
            </div>
          </div> */}
          <div
            onClick={handleClick}
            className="bg-yellow-300 py-4 px-5 rounded-lg cursor-pointer"
          >
            <p className="font-semibold text-404040">Tìm kiếm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
