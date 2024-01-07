import { useState } from "react";
import axios from "../../../utils/axios";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../Notification/index";

const CrudTourModal = ({ handleChangeFalse, data, type }) => {
  const [period, setPeriod] = useState(data.period);
  const [name, setName] = useState(data.name);
  const [startTime, setStartTime] = useState(data.startTime);
  const [urlImage, setUrlImage] = useState(data.urlImage);
  const [prices, setPrices] = useState(data.prices);
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
    if (type == "add") {
      axios
        .post(`/api/v1/tours`, {
          name: name,
          start_time: startTime,
          period: period,
          main_image_url: urlImage,
          prices: prices,
        })
        .then(() => {
          handleNotify("success", "Thành công", "Lưu thông tin thành công!");
        })
        .catch((err) => console.log(err));
    }
    else if(type == 'edit'){
        axios
        .put(`/api/v1/tours`, {
          _id: data._id,
          name: name,
          start_time: startTime,
          period: period,
          main_image_url: urlImage,
          prices: prices,
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
