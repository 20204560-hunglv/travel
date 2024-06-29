import { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PropTypes } from "prop-types";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ChooseTourDialog from "../../Dialog/ChooseTourDialog";
import currencyVnd from "./../../../utils/currencyVnd";
import { selectNameCity } from "./../../../utils/cites";
import { formatDate } from "../../../utils/resolveTime";
import ChooseCustomer from "../../Dialog/ChooseCustomer";
import ChooseHotelDialog from "./../../Dialog/ChooseHotelDialog/index";
import checkOrderCrud from "../../../services/validates/CheckOrderCrud";
import { handleNotify } from "./../../Notification/index";
import * as HotelServices from "../../../services/HotelServices";
import {
  STATUS_CONFIRM,
  STATUS_DONE,
  STATUS_PENDING,
  STATUS_CANCEL,
} from "../../../const/StatusOrder";

const CRUDOrderModal = ({ handleSaveData, handleBack, data, title = "" }) => {
  const [email, setEmail] = useState(data?.email || "");
  const [phone, setPhone] = useState(data?.phone || "");
  const [address, setAddress] = useState(data?.address || "");
  const [status, setStatus] = useState(data?.status || "");
  const [adultCount, setAdultCount] = useState(data?.adultCount || "0");
  const [childrenCount, setChildrenCount] = useState(
    data?.childrenCount || "0"
  );
  const [sumPrice, setSumPrice] = useState(data?.sumPrice || "0");
  const [kidCount, setKidCount] = useState(data?.kidCount || "0");
  const [customerId, setCustomerId] = useState(data?.customerId || "");
  const [tourId, setTourId] = useState(data?.tourId || "");
  const [fullName, setFullName] = useState(data?.fullName || "");
  const [createdDate, setCreatedDate] = useState(
    (data?.createdDate && dayjs(data.createdDate)) || null
  );
  const [hotel, setHotel] = useState({});
  const [openTour, setOpenTour] = useState(false);
  const [tours, setTours] = useState(data ? [data.tour] : []);
  const [openCustomer, setOpenCustomer] = useState(false);
  const [customers, setCustomers] = useState(data ? [data.customer] : []);
  const [openHotel, setOpenHotel] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [singleRoomCount, setSingleRoomCount] = useState(0);
  const [doubleRoomCount, setDoubleRoomCount] = useState(0);

  const handleChangeTours = (tours) => {
    setTours(tours);
    if (tours.length > 0) setTourId(tours[0]._id);
    else setTourId("");
  };
  const handleChangeCustomers = (customers) => {
    setCustomers(customers);
    if (customers.length > 0) setCustomerId(customers[0]._id);
    else setCustomerId("");
  };
  const handleChangeHotels = (hotels) => {
    setHotels(hotels);
    if (hotels.length > 0) setHotel(hotels[0]);
    else setHotel({});
  };
  const handleSave = async () => {
    try {
      checkOrderCrud({
        fullName,
        email,
        phone,
        createdDate,
        status,
        adultCount,
        childrenCount,
        kidCount,
      });
      console.log({
        email,
        phone,
        address,
        status,
        adultCount,
        childrenCount,
        sumPrice,
        kidCount,
        customerId,
        tourId,
        fullName,
        createdDate: createdDate ? createdDate.format() : createdDate,
        hotel,
      });
      await handleSaveData({
        email,
        phone,
        address,
        status,
        adultCount,
        childrenCount,
        sumPrice,
        kidCount,
        customerId,
        tourId,
        fullName,
        createdDate: createdDate ? createdDate.format() : createdDate,
        hotel,
      });
    } catch (error) {
      handleNotify("warning", "", error.message);
    }
  };

  useEffect(() => {
    if (tours.length > 0) {
      const tour = tours[0];
      let total =
        adultCount * tour.adultPrice +
        childrenCount * tour.childrenPrice +
        kidCount * tour.kidPrice;
      if (hotels.length > 0) {
        if (singleRoomCount > 0)
          total += singleRoomCount * hotels[0]?.singleRoom.price;
        if (doubleRoomCount > 0)
          total += doubleRoomCount * hotels[0]?.doubleRoom.price;
      }
      setSumPrice(total || 0);
    }
  }, [
    adultCount,
    childrenCount,
    kidCount,
    customers,
    hotels,
    singleRoomCount,
    doubleRoomCount,
    tours,
  ]);
  useEffect(() => {
    if (data?.hotel) {
      HotelServices.getOne(data?.hotel.id)
        .then((hotel) => setHotels([hotel]))
        .catch((e) => console.log(e));
    }
  }, [data]);

  return (
    <>
      <Button
        startIcon={<ArrowBackIosIcon fontSize="small" />}
        onClick={() => handleBack(false)}
      >
        Quay lại
      </Button>
      <div className="grid grid-cols-12 py-10">
        <div className="col-span-7">
          <div className="flex items-center">
            <div className="w-full max-w-sm container mx-auto">
              <h2 className="text-2xl text-center text-gray-900 pb-5">
                {title}
              </h2>
              <div className="space-y-4">
                <div>
                  <Paper className="p-4">
                    <div className="flex justify-between">
                      <Typography variant="h6">Tour</Typography>
                      <Button onClick={() => setOpenTour(true)}>Chọn</Button>
                    </div>
                    <div className="w-full my-5">
                      {tours.length > 0 ? (
                        <div className="space-y-3">
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              {tours[0].name}
                            </Typography>
                          </div>
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              Giá
                            </Typography>
                            <Typography variant="body2">
                              {`${currencyVnd(tours[0].adultPrice)} / khách`}
                            </Typography>
                          </div>
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              Nơi khởi hành
                            </Typography>
                            <Typography variant="body2">
                              {selectNameCity(tours[0].addressFrom)}
                            </Typography>
                          </div>
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              Nơi đến
                            </Typography>
                            <Typography variant="body2">
                              {selectNameCity(tours[0].addressTo)}
                            </Typography>
                          </div>
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              Khởi hành lúc
                            </Typography>
                            <Typography variant="body2">
                              {formatDate(
                                tours[0].start_time,
                                "DD/MM/YYYY HH:mm"
                              )}
                            </Typography>
                          </div>
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              Thời gian
                            </Typography>
                            <Typography variant="body2">
                              {`${tours[0].period} ngày`}
                            </Typography>
                          </div>
                          <div className="flex space-x-5">
                            <Typography variant="body1" fontWeight={500}>
                              Số chỗ còn nhận
                            </Typography>
                            <Typography variant="body2">
                              {tours[0].slotStill || tours[0].slotMax}
                            </Typography>
                          </div>
                        </div>
                      ) : (
                        <p>Vui lòng chọn tour</p>
                      )}
                    </div>
                  </Paper>
                </div>
                <div>
                  {tours.length > 0 && (
                    <Paper>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Họ và tên
                          <span className="require text-base">{` *`}</span>{" "}
                        </p>
                        <TextField
                          size="small"
                          // fullWidth
                          value={fullName}
                          onChange={(event) => setFullName(event.target.value)}
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Email
                          <span className="require text-base">{` *`}</span>
                        </p>
                        <TextField
                          size="small"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Số điện thoại
                          <span className="require text-base">{` *`}</span>
                        </p>
                        <TextField
                          size="small"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Địa chỉ
                        </p>
                        <TextField
                          size="small"
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Số lượng người lớn
                        </p>
                        <TextField
                          InputProps={{
                            inputProps: { min: 0 },
                          }}
                          size="small"
                          type="number"
                          value={adultCount}
                          onChange={(event) =>
                            setAdultCount(event.target.value)
                          }
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Số lượng trẻ em
                        </p>
                        <TextField
                          InputProps={{
                            inputProps: { min: 0 },
                          }}
                          size="small"
                          type="number"
                          value={childrenCount}
                          onChange={(event) =>
                            setChildrenCount(event.target.value)
                          }
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Số lượng em bé
                        </p>
                        <TextField
                          InputProps={{
                            inputProps: { min: 0 },
                          }}
                          size="small"
                          type="number"
                          value={kidCount}
                          onChange={(event) => setKidCount(event.target.value)}
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Ngày đặt
                          <span className="require text-base">{` *`}</span>
                        </p>
                        <DateTimePicker
                          value={createdDate}
                          onChange={(newValue) => setCreatedDate(newValue)}
                        />
                      </div>
                      <div className="w-full p-4">
                        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Trạng thái
                          <span className="require text-base">{` *`}</span>
                        </p>
                        <div className="flex">
                          <RadioGroup
                            id="radio-isActive"
                            row
                            name="gender-radio-isActive-group"
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                          >
                            <FormControlLabel
                              value={STATUS_CONFIRM}
                              control={<Radio />}
                              label="Xác nhận"
                            />
                            <FormControlLabel
                              value={STATUS_PENDING}
                              control={<Radio />}
                              label="Chờ xác nhận"
                            />
                            <FormControlLabel
                              value={STATUS_DONE}
                              control={<Radio />}
                              label="Hoàn thành"
                            />
                            <FormControlLabel
                              value={STATUS_CANCEL}
                              control={<Radio />}
                              label="Hủy"
                            />
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="w-full p-4">
                        {adultCount > 0 && (
                          <Typography>
                            {`Người lớn: ${adultCount} x ${currencyVnd(tours[0]?.adultPrice)}`}
                          </Typography>
                        )}
                        {childrenCount > 0 && (
                          <Typography>{`Trẻ em: ${childrenCount} x ${currencyVnd(tours[0]?.childrenPrice)}`}</Typography>
                        )}
                        {kidCount > 0 && (
                          <Typography>{`Em bé: ${kidCount} x ${currencyVnd(tours[0]?.childrenPrice)}`}</Typography>
                        )}
                        {singleRoomCount > 0 && (
                          <Typography>{`Phòng đơn: ${singleRoomCount} x ${currencyVnd(hotels[0]?.singleRoom.price)}`}</Typography>
                        )}
                        {doubleRoomCount > 0 && (
                          <Typography>{`Phòng đôi: ${doubleRoomCount} x ${currencyVnd(hotels[0]?.doubleRoom.price)}`}</Typography>
                        )}
                        <Typography variant="h6">
                          Tổng tiền:{" "}
                          <span className="font-bold text-3xl leading-7 text-red-500 ">
                            {currencyVnd(sumPrice)}
                          </span>
                        </Typography>
                      </div>
                    </Paper>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  disabled={tours.length === 0 || customers.length === 0}
                  fullWidth
                  sx={{
                    marginTop: 4,
                  }}
                  variant="contained"
                  onClick={() => handleSave()}
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 max-w-sm space-y-5 py-10">
          <div>
            <Paper className="p-4">
              <div className="flex justify-between">
                <Typography variant="h6">Khách hàng</Typography>
                <Button onClick={() => setOpenCustomer(true)}>Chọn</Button>
              </div>
              <div className="w-full my-5">
                {customers.length > 0 ? (
                  <div className="space-y-3">
                    <div className="flex space-x-5">
                      <Typography variant="body1" fontWeight={500}>
                        Username
                      </Typography>
                      <Typography variant="body2">
                        {`${customers[0].username}`}
                      </Typography>
                    </div>
                    <div className="flex space-x-5">
                      <Typography variant="body1" fontWeight={500}>
                        Email
                      </Typography>
                      <Typography variant="body2">
                        {`${customers[0].email}`}
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <p>Vui lòng chọn khách hàng</p>
                )}
              </div>
            </Paper>
          </div>
          <div>
            <Paper className="p-4">
              <div className="flex justify-between">
                <Typography variant="h6">Khách sạn</Typography>
                <Button onClick={() => setOpenHotel(true)}>Chọn</Button>
              </div>
              <div className="w-full my-5">
                {hotels.length > 0 ? (
                  <div key={hotels[0]._id}>
                    <div className="flex space-x-2 items-center">
                      <img
                        className="mr-2"
                        width={60}
                        height={60}
                        src={hotels[0].image}
                        alt="Hình ảnh"
                      />
                      <p>{hotels[0].name}</p>
                    </div>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      className="py-3"
                    >
                      {hotels[0]?.address}
                    </Typography>
                    <div className="w-full">
                      <div>
                        <div className="flex space-x-5">
                          <Typography variant="body1" fontWeight={500}>
                            Phòng đơn còn trống:
                          </Typography>
                          <Typography variant="body2">
                            {`${hotels[0]?.singleRoom?.roomsAvailable || 0}`}
                          </Typography>
                        </div>
                        <div className="flex space-x-5">
                          <Typography variant="body1" fontWeight={500}>
                            Giá phòng đơn:
                          </Typography>
                          <Typography variant="body2">
                            {`${currencyVnd(hotels[0]?.singleRoom?.price || 0)}`}
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <div className="flex space-x-5">
                          <Typography variant="body1" fontWeight={500}>
                            Phòng đôi còn trống:
                          </Typography>
                          <Typography variant="body2">
                            {`${hotels[0]?.doubleRoom?.roomsAvailable || 0}`}
                          </Typography>
                        </div>
                        <div className="flex space-x-5">
                          <Typography variant="body1" fontWeight={500}>
                            Giá phòng đôi:
                          </Typography>
                          <Typography variant="body2">
                            {`${currencyVnd(hotels[0]?.doubleRoom?.price || 0)}`}
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center space-x-5">
                        <Typography variant="body1" fontWeight={500}>
                          Phòng đơn
                        </Typography>
                        <TextField
                          InputProps={{
                            inputProps: { min: 0 },
                          }}
                          value={singleRoomCount}
                          onChange={(event) =>
                            setSingleRoomCount(event.target.value)
                          }
                          type="number"
                          sx={{ width: "100px" }}
                          size="small"
                        ></TextField>
                      </div>
                      <div className="flex items-center space-x-5">
                        <Typography variant="body1" fontWeight={500}>
                          Phòng đôi
                        </Typography>
                        <TextField
                          InputProps={{
                            inputProps: { min: 0 },
                          }}
                          value={doubleRoomCount}
                          onChange={(event) =>
                            setDoubleRoomCount(event.target.value)
                          }
                          type="number"
                          sx={{ width: "100px" }}
                          size="small"
                        ></TextField>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Bạn không chọn khách sạn</p>
                )}
              </div>
            </Paper>
          </div>
        </div>
        <ChooseTourDialog
          setOpen={setOpenTour}
          open={openTour}
          onClose={handleChangeTours}
          checkInput={tours}
        />
        <ChooseCustomer
          setOpen={setOpenCustomer}
          open={openCustomer}
          onClose={handleChangeCustomers}
          checkInput={customers}
        />
        <ChooseHotelDialog
          setOpen={setOpenHotel}
          open={openHotel}
          onClose={handleChangeHotels}
          checkInput={hotels}
        />
      </div>
    </>
  );
};

CRUDOrderModal.propTypes = {
  handleSaveData: PropTypes.func,
  handleBack: PropTypes.func,
  data: PropTypes.object,
  title: PropTypes.string,
};

export default CRUDOrderModal;
