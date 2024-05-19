import { useState } from "react";
import cites from "../../../utils/cites";
import { Button, MenuItem, Select, TextField } from "@mui/material";

const CrudTourModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm chuyến du lịch",
}) => {
  const [period, setPeriod] = useState((data && data.period) || "");
  const [name, setName] = useState((data && data.name) || "");
  const [start_time, setStartTime] = useState((data && data.start_time) || "");
  const [main_image_url, setUrlImage] = useState((data && data.main_image_url) || "");
  const [prices, setPrices] = useState((data && data.prices) || "");
  const [addressFrom, setAddressFrom] = useState((data && data.addressFrom) || "");
  const [addressTo, setAddressTo] = useState((data && data.addressTo) || "");
  const [describe, setDescribe] = useState((data && data.describe) || "");
  const [tourGuide, setTourGuide] = useState((data && data.tourGuide) || "");
  const [vehicle, setVehicle] = useState((data && data.vehicle) || "");
  const [visitLocation, setVisitLocation] = useState((data && data.visitLocation) || "");
  const [slotMax, setSlotMax] = useState((data && data.slotMax) || "");

  const handleSave = () => {
    handleSaveData({
      name,
      tourGuide,
      vehicle,
      visitLocation,
      slotMax,
      start_time,
      period,
      main_image_url,
      prices,
      addressFrom,
      addressTo,
      describe,
    });
  };

  return (
    <div className="flex items-center">
      <div className="w-full max-w-sm container mx-auto py-10">
        <h2 className="text-2xl text-center text-gray-900 pb-5">{title}</h2>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs
           font-bold mb-2"
          >
            Tên
          </label>
          <TextField
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            multiline
            type="text"
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
            value={start_time}
            onChange={event => setStartTime(event.target.value)}
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
            onChange={event => setPeriod(event.target.value)}
          />
        </div>
        <div className="w-full mb-5 space-y-4">
          <div>
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Điểm đi
            </p>
            <Select
              className="w-full"
              value={addressFrom}
              onChange={(event) => setAddressFrom(event.target.value)}
            >
              {cites.map((city, index) => (
                <MenuItem key={index} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Điểm đến
            </p>
            <Select
              className="w-full"
              value={addressTo}
              onChange={(event) => setAddressTo(event.target.value)}
            >
              {cites.map((city, index) => (
                <MenuItem key={index} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
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
            value={main_image_url}
            onChange={event => setUrlImage(event.target.value)}
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
            onChange={event => setPrices(event.target.value)}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Hướng dẫn viên
          </label>
          <TextField
            value={tourGuide}
            onChange={(event) => setTourGuide(event.target.value)}
            fullWidth
            type="text"
            multiline
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Phương tiện
          </label>
          <TextField
            value={vehicle}
            onChange={(event) => setVehicle(event.target.value)}
            fullWidth
            type="text"
            multiline
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Điểm tham quan
          </label>
          <TextField
            value={visitLocation}
            onChange={(event) => setVisitLocation(event.target.value)}
            fullWidth
            type="text"
            multiline
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Số lượng
          </label>
          <TextField
            value={slotMax}
            onChange={(event) => setSlotMax(event.target.value)}
            fullWidth
            type="text"
            multiline
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Mô tả
          </label>
          <TextField
            value={describe}
            onChange={(event) => setDescribe(event.target.value)}
            fullWidth
            type="text"
            multiline
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            fullWidth
            variant="contained"
            sx={{ marginTop: 4 }}
            onClick={() => handleSave()}
          >
            Lưu
          </Button>
        </div>
        <div
          onClick={() => handleBack(false)}
          className="text-center mt-4 text-gray-500 cursor-pointer"
        >
          <div>Quay lại</div>
        </div>
      </div>
    </div>
  );
};

export default CrudTourModal;
