import { useState } from "react";
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

const CRUDOrderModal = ({ handleSaveData, handleBack, data, title = "" }) => {
  const [email, setEmail] = useState(data?.email || "");
  const [phone, setPhone] = useState(data?.phone || "");
  const [address, setAddress] = useState(data?.address || "");
  const [status, setStatus] = useState(data?.status || "");
  const [adultCount, setAdultCount] = useState(data?.adultCount || "");
  const [childrenCount, setChildrenCount] = useState(data?.childrenCount || "");
  const [sumPrice, setSumPrice] = useState(data?.sumPrice || "");
  const [kidCount, setKidCount] = useState(data?.kidCount || "");
  const [customerId, setCustomerId] = useState(data?.customerId || "");
  const [tourId, setTourId] = useState(data?.tourId || "");
  const [fullName, setFullName] = useState(data?.fullName || "");
  const [createdDate, setCreatedDate] = useState(
    (data?.createdDate && dayjs(data.createdDate)) || null
  );
  const [openTour, setOpenTour] = useState(false);
  const [tours, setTours] = useState([]);
  const [openCustomer, setOpenCustomer] = useState(false);
  const [customers, setCustomers] = useState([]);

  const handleChangeTours = (tours) => {
    setTours(tours);
    setTourId(tours[0]._id)
  }
  const handleChangeCustomers = (customers) => {
    setCustomers(customers);
    setCustomerId(customers[0]._id)
  }
  const handleSave = async () => {
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
    })
    // await handleSaveData({
    //   email,
    //   phone,
    //   address,
    //   status,
    //   adultCount,
    //   childrenCount,
    //   sumPrice,
    //   kidCount,
    //   customerId,
    //   tourId,
    //   fullName,
    // });
  };

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
                      {/* <p
                  className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                >
                  TourId
                </p> */}
                      {/* <TextField
                  size="small"
                  fullWidth
                  value={tourId}
                  onChange={(event) => setTourId(event.target.value)}
                /> */}
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
                        </p>
                        <DateTimePicker
                          value={createdDate}
                          onChange={(newValue) => setCreatedDate(newValue)}
                        />
                      </div>
                      <div className="w-full  flex items-center justify-between p-4">
                        <p
                          className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                        >
                          Tổng tiền
                        </p>
                        <TextField
                          size="small"
                          value={sumPrice}
                          onChange={(event) => setSumPrice(event.target.value)}
                        />
                      </div>
                      <div className="w-full p-4">
                        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Trạng thái
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
                              value="Confirmed"
                              control={<Radio />}
                              label="Xác nhận"
                            />
                            <FormControlLabel
                              value="Pending"
                              control={<Radio />}
                              label="Chờ xác nhận"
                            />
                            <FormControlLabel
                              value="Cancelled"
                              control={<Radio />}
                              label="Hủy"
                            />
                          </RadioGroup>
                        </div>
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
                <Typography variant="h6">Customer</Typography>
                <Button onClick={() => setOpenCustomer(true)}>Chọn</Button>
              </div>
              <div className="w-full my-5">
                {/* <p
                  className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
                >
                  CustomerId
                </p>
                <TextField
                  size="small"
                  fullWidth
                  value={customerId}
                  onChange={(event) => setCustomerId(event.target.value)}
                /> */}
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
                  <p>Vui lòng chọn customer</p>
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
