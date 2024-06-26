import { useState } from "react";
import { useNavigate } from "react-router-dom";
import citys from "../../../utils/cites";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Banner = () => {
  const cityLabels = citys;
  const navigate = useNavigate();

  const [countryFrom, setCountryFrom] = useState();
  const [countryTo, setCountryTo] = useState();
  const [date, onChange] = useState(null);

  const handleFrom = (event) => {
    setCountryFrom(event.target.value);
  };
  const handleTo = (event) => {
    setCountryTo(event.target.value);
  };

  const handleClick = () => {
    const dayStart = date ? date.$d : null;
    navigate("/search", {
      state: {
        from: countryFrom,
        to: countryTo,
        start: dayStart,
      },
    });
  };

  return (
    <div
      className={`calc-64 bg-F5F7FA flex flex-col justify-center items-center bg-image`}
    >
      <div className="mb-14">
        <h1 className="font-semibold text-center text-404040 text-7xl">
          Du lịch khắp mọi nơi!
        </h1>
        <p className="text-center text-4D4D4D text-3xl">
          Cung cấp cho bạn những trải nghiệm tuyệt vời.
        </p>
      </div>
      <div
        className={`h-max rounded-md py-4 px-4 border-b-2 border-4CAF4F bg-white`}
      >
        <div className={`flex justify-around items-center`}>
          <div className=" flex items-center justify-around py-1 px-5 border-2 border-yellow-200 rounded-2xl h-24">
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
          <div className=" flex items-center justify-between py-1 px-7 border-2 border-yellow-200 rounded-2xl h-24">
            <i className="fa-solid fa-location-dot mr-2 text-red-400 text-base"></i>
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
          <div className="py-1 px-4 mx-4 border-2 border-yellow-200 rounded-2xl h-24">
            <div>
              <span>Ngày đi</span>
            </div>
            <div>
              <DatePicker
                className="text-404040 bg-gray-50 outline-none border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-2"
                onChange={onChange}
                value={date}
              />
            </div>
          </div>
          <div
            onClick={handleClick}
            className="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 py-4 px-5 rounded-lg cursor-pointer"
          >
            <p className="font-semibold text-404040">Tìm kiếm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
