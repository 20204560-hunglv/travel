import { useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../Notification/index";
import citys from "../../../utils/citys";
import {
  add as addTour,
  update as updateTour,
} from "../../../Services/TourServices";

const CrudTourModal = ({ handleChangeFalse, data, type }) => {
  const cityLabels = citys;

  const [period, setPeriod] = useState(data.period);
  const [name, setName] = useState(data.name);
  const [startTime, setStartTime] = useState(data.startTime);
  const [urlImage, setUrlImage] = useState(data.urlImage);
  const [prices, setPrices] = useState(data.prices);
  const [countryFrom, setCountryFrom] = useState(data.addressFrom);
  const [countryTo, setCountryTo] = useState(data.addressTo);

  const handleFrom = (event) => {
    setCountryFrom(event.target.value);
  };
  const handleTo = (event) => {
    setCountryTo(event.target.value);
  };
  const handlePeriod = (event) => {
    setPeriod(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleUrlImage = (event) => {
    setUrlImage(event.target.value);
  };
  const handlePrices = (event) => {
    setPrices(event.target.value);
  };
  const handleSave = () => {
    if (type === "add") {
      addTour(name, startTime, period, urlImage, prices, countryFrom, countryTo)
        .then(() => {
          handleNotify("success", "Thành công", "Lưu thông tin thành công!");
        })
        .catch((err) => console.log(err));
    } else if (type === "edit") {
      updateTour(data._id, {
        name: name,
        start_time: startTime,
        period: period,
        main_image_url: urlImage,
        prices: prices,
        addressFrom: countryFrom,
        addressTo: countryTo,
      })
        .then(() => {
          handleNotify("success", "Thành công", "Lưu thông tin thành công!");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex items-center">
      <ReactNotifications />
      <div className="w-full max-w-sm container mx-auto py-10">
        <h2 className="text-2xl text-center text-gray-900 pb-5">
          Thông tin Tour du lịch
        </h2>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs
           font-bold mb-2"
          >
            Tên
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Ngày bắt đầu
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={startTime}
            onChange={handleStartTime}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Khoảng thời gian
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={period}
            onChange={handlePeriod}
          />
        </div>
        <div className="w-full mb-5 flex justify-between">
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
          <div>
            <label className=" ml-4 mb-2 text-sm font-medium">Điểm đến</label>
            <select
              value={countryTo}
              onChange={handleTo}
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
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Link hình ảnh
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={urlImage}
            onChange={handleUrlImage}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Giá
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="number"
            value={prices}
            onChange={handlePrices}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="mt-5 bg-green-400 w-full hover:bg-green-500 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleSave()}
          >
            Lưu
          </button>
        </div>
        <div
          onClick={() => handleChangeFalse()}
          className="text-center mt-4 text-gray-500 cursor-pointer"
        >
          <div>Hủy</div>
        </div>
      </div>
    </div>
  );
};

export default CrudTourModal;
