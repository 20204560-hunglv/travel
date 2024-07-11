import { useState } from "react";
import cites from "../../../utils/cites";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChooseGuideDialog from "../../Dialog/ChooseGuideDialog";
import CloseIcon from "@mui/icons-material/Close";
import Require from "../../Require";
import checkTourModal from "../../../services/validates/CheckTourModal";
import { handleNotify } from "./../../Notification/index";

const CrudTourModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm chuyến du lịch",
}) => {
  const [period, setPeriod] = useState((data && data.period) || "");
  const [name, setName] = useState((data && data.name) || "");
  const [start_time, setStartTime] = useState(
    (data && data.start_time && dayjs(data.start_time)) || null
  );
  const [main_image_url, setUrlImage] = useState(
    (data && data.main_image_url) || ""
  );
  const [prices, setPrices] = useState((data && data.prices) || "");
  const [addressFrom, setAddressFrom] = useState(
    (data && data.addressFrom) || ""
  );
  const [addressTo, setAddressTo] = useState((data && data.addressTo) || "");
  const [describe, setDescribe] = useState((data && data.describe) || "");
  const [tourGuide, setTourGuide] = useState((data && data.tourGuide) || []);
  const [vehicle, setVehicle] = useState((data && data.vehicle) || "");
  const [visitLocation, setVisitLocation] = useState(
    (data && data.visitLocation) || ""
  );
  const [slotMax, setSlotMax] = useState((data && data.slotMax) || "");
  const [slotStill, setSlotStill] = useState((data && data.slotStill) || "");
  const [adultPrice, setAdultPrice] = useState((data && data.adultPrice) || "");
  const [childrenPrice, setChildrenPrice] = useState(
    (data && data.childrenPrice) || ""
  );
  const [kidPrice, setKidPrice] = useState((data && data.kidPrice) || "");
  const [openGuide, setOpenGuide] = useState(false);

  const handleSave = async () => {
    try {
      const startTime = start_time ? start_time.format() : start_time;
      checkTourModal({
        name,
        period,
        main_image_url,
        vehicle,
        slotMax,
        slotStill,
        adultPrice,
        childrenPrice,
        kidPrice,
        addressFrom,
        addressTo,
        start_time: startTime,
      });
      const guides = tourGuide.map((elem) => elem._id);
      await handleSaveData({
        name,
        tourGuide: guides,
        vehicle,
        visitLocation,
        slotMax,
        slotStill,
        start_time: startTime,
        period,
        main_image_url,
        addressFrom,
        addressTo,
        describe,
        adultPrice,
        childrenPrice,
        kidPrice,
      });
    } catch (error) {
      handleNotify("warning", "", error.message);
    }
  };

  return (
    <Container maxWidth="md" className="py-6">
      <div className="flex justify-between">
        <Button
          startIcon={<ArrowBackIosIcon fontSize="small" />}
          onClick={() => handleBack(false)}
        >
          Quay lại
        </Button>
        <Button variant="contained" onClick={() => handleSave()}>
          Lưu
        </Button>
      </div>
      <h2 className="text-2xl text-center text-gray-900 pb-5">{title}</h2>
      <Paper className="grid grid-cols-2 space-x-6 p-10">
        <div className="space-y-5 px-16">
          <TextField
            size="small"
            fullWidth
            label={
              <>
                Tên
                <Require />
              </>
            }
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            type="number"
            label={
              <>
                Khoảng thời gian
                <Require />
              </>
            }
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            InputProps={{
              inputProps: { min: 0 },
            }}
          />
          <TextField
            label={
              <>
                Link hình ảnh
                <Require />
              </>
            }
            value={main_image_url}
            onChange={(event) => setUrlImage(event.target.value)}
            size="small"
            fullWidth
          />
          <TextField
            label={
              <>
                Phương tiện
                <Require />
              </>
            }
            value={vehicle}
            onChange={(event) => setVehicle(event.target.value)}
            size="small"
            fullWidth
          />
          <TextField
            label={
              <>
                Tổng số lượng
                <Require />
              </>
            }
            value={slotMax}
            onChange={(event) => setSlotMax(event.target.value)}
            size="small"
            fullWidth
            type="number"
          />
          <TextField
            label={
              <>
                Số lượng còn trống
                <Require />
              </>
            }
            value={slotStill}
            onChange={(event) => setSlotStill(event.target.value)}
            size="small"
            fullWidth
            type="number"
          />
          <TextField
            label="Điểm tham quan"
            value={visitLocation}
            onChange={(event) => setVisitLocation(event.target.value)}
            size="small"
            fullWidth
          />
          <TextField
            label="Mô tả"
            value={describe}
            onChange={(event) => setDescribe(event.target.value)}
            size="small"
            fullWidth
            multiline
          />
        </div>
        <div className="space-y-5 px-16">
          <TextField
            label={
              <>
                Giá cho người lớn
                <Require />
              </>
            }
            value={adultPrice}
            onChange={(event) => setAdultPrice(event.target.value)}
            size="small"
            fullWidth
            type="number"
          />
          <TextField
            label={
              <>
                Giá cho trẻ em
                <Require />
              </>
            }
            value={childrenPrice}
            onChange={(event) => setChildrenPrice(event.target.value)}
            size="small"
            fullWidth
            type="number"
          />
          <TextField
            label={
              <>
                Giá cho em bé
                <Require />
              </>
            }
            value={kidPrice}
            onChange={(event) => setKidPrice(event.target.value)}
            size="small"
            fullWidth
            type="number"
          />
          <div>
            <InputLabel>
              {
                <>
                  Điểm đi
                  <Require />
                </>
              }
            </InputLabel>
            <Select
              size="small"
              fullWidth
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
            <InputLabel>
              {
                <>
                  Điểm đến
                  <Require />
                </>
              }
            </InputLabel>
            <Select
              size="small"
              fullWidth
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
          <div>
            <DateTimePicker
              label={
                <>
                  Thời gian xuất phát
                  <Require />
                </>
              }
              value={start_time}
              onChange={(newValue) => setStartTime(newValue)}
            />
          </div>
          <div>
            <div className="flex items-center mb-2 ">
              <InputLabel>Hướng dẫn viên</InputLabel>
              <Button onClick={() => setOpenGuide(true)}>Chọn</Button>
            </div>
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
        </div>
      </Paper>

      <ChooseGuideDialog
        setOpen={setOpenGuide}
        open={openGuide}
        onClose={setTourGuide}
        checkInput={tourGuide}
      />
    </Container>
  );
};

export default CrudTourModal;
