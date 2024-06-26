import { useState } from "react";
import cites from "../../../utils/cites";
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChooseGuideDialog from "../../Dialog/ChooseGuideDialog";
import CloseIcon from "@mui/icons-material/Close";

const CrudTourModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm chuyến du lịch",
}) => {
  const [period, setPeriod] = useState((data && data.period) || "");
  const [name, setName] = useState((data && data.name) || "");
  const [start_time, setStartTime] = useState(
    (data && data.start_time && dayjs(data.start_time)) || null,
  );
  const [main_image_url, setUrlImage] = useState(
    (data && data.main_image_url) || "",
  );
  const [prices, setPrices] = useState((data && data.prices) || "");
  const [addressFrom, setAddressFrom] = useState(
    (data && data.addressFrom) || "",
  );
  const [addressTo, setAddressTo] = useState((data && data.addressTo) || "");
  const [describe, setDescribe] = useState((data && data.describe) || "");
  const [tourGuide, setTourGuide] = useState((data && data.tourGuide) || []);
  const [vehicle, setVehicle] = useState((data && data.vehicle) || "");
  const [visitLocation, setVisitLocation] = useState(
    (data && data.visitLocation) || "",
  );
  const [slotMax, setSlotMax] = useState((data && data.slotMax) || "");
  const [adultPrice, setAdultPrice] = useState((data && data.adultPrice) || "");
  const [childrenPrice, setChildrenPrice] = useState(
    (data && data.childrenPrice) || "",
  );
  const [kidPrice, setKidPrice] = useState((data && data.kidPrice) || "");
  const [openGuide, setOpenGuide] = useState(false);

  const handleSave = () => {
    const guides = tourGuide.map((elem) => elem._id);
    handleSaveData({
      name,
      tourGuide: guides,
      vehicle,
      visitLocation,
      slotMax,
      start_time: start_time ? start_time.format() : start_time,
      period,
      main_image_url,
      prices,
      addressFrom,
      addressTo,
      describe,
      adultPrice,
      childrenPrice,
      kidPrice,
    });
  };

  return (
    <>
      <Button
        startIcon={<ArrowBackIosIcon fontSize="small" />}
        onClick={() => handleBack(false)}
      >
        Quay lại
      </Button>
      <div className="flex items-center">
        <div className="w-full max-w-sm container mx-auto py-10">
          <h2 className="text-2xl text-center text-gray-900 pb-5">{title}</h2>
          <div className="w-full mb-5">
            {/* <p
              className="block uppercase tracking-wide text-gray-700 text-xs
           font-bold mb-2"
            >
              Tên
            </p> */}
            <TextField
              fullWidth
              required
              label="Tên"
              value={name}
              onChange={(event) => setName(event.target.value)}
              multiline
              type="text"
            />
          </div>
          <div className="w-full mb-5">
            {/* <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Thời gian xuất phát
            </p> */}
            <DateTimePicker
              label="Thời gian xuất phát *"
              sx={{
                width: "100%",
              }}
              fullWidth
              value={start_time}
              onChange={(newValue) => setStartTime(newValue)}
            />
          </div>
          <div className="w-full mb-5">
            {/* <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Khoảng thời gian
            </p> */}
            <TextField
              fullWidth
              type="number"
              required
              label="Khoảng thời gian"
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              InputProps={{
                inputProps: { min: 0 },
              }}
            />
          </div>
          <div className="w-full mb-5 space-y-4">
            <div>
              {/* <p
                className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
              >
                Điểm đi
              </p> */}
              <InputLabel id="address-from-tour-modal">Điểm đi</InputLabel>
              <Select
                label={<p>Điểm đi</p>}
                id="address-from-tour-modal"
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
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Link hình ảnh
            </p>
            <TextField
              value={main_image_url}
              onChange={(event) => setUrlImage(event.target.value)}
              fullWidth
              type="text"
              multiline
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Giá
            </p>
            <TextField
              value={prices}
              onChange={(event) => setPrices(event.target.value)}
              fullWidth
              type="number"
            />
          </div>
          <div className="w-full mb-5">
            <div className="flex items-center mb-2 ">
              <p
                className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold "
              >
                Hướng dẫn viên
              </p>
              <Button onClick={() => setOpenGuide(true)}>Chọn</Button>
            </div>
            {/* <TextField
              value={tourGuide}
              onChange={(event) => setTourGuide(event.target.value)}
              fullWidth
              type="text"
            /> */}
            {tourGuide.map((elem) => {
              return (
                <Box key={elem._id} className="flex items-center px-5">
                  <Typography
                    key={elem._id}
                    variant="body1"
                  >{`${elem.fullName} - ${elem?.email}`}</Typography>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Box>
              );
            })}
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Phương tiện
            </p>
            <TextField
              value={vehicle}
              onChange={(event) => setVehicle(event.target.value)}
              fullWidth
              type="text"
              multiline
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Điểm tham quan
            </p>
            <TextField
              value={visitLocation}
              onChange={(event) => setVisitLocation(event.target.value)}
              fullWidth
              type="text"
              multiline
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Số lượng
            </p>
            <TextField
              value={slotMax}
              onChange={(event) => setSlotMax(event.target.value)}
              fullWidth
              type="number"
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Giá cho người lớn
            </p>
            <TextField
              value={adultPrice}
              onChange={(event) => setAdultPrice(event.target.value)}
              fullWidth
              type="number"
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Giá cho trẻ em
            </p>
            <TextField
              value={childrenPrice}
              onChange={(event) => setChildrenPrice(event.target.value)}
              fullWidth
              type="number"
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Giá cho em bé
            </p>
            <TextField
              value={kidPrice}
              onChange={(event) => setKidPrice(event.target.value)}
              fullWidth
              type="number"
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Mô tả
            </p>
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
        </div>
      </div>
      <ChooseGuideDialog
        setOpen={setOpenGuide}
        open={openGuide}
        onClose={setTourGuide}
        checkInput={tourGuide}
      />
    </>
  );
};

export default CrudTourModal;
