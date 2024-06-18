import { useState } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PropTypes } from "prop-types";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

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

  const handleSave = async () => {
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
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Họ và tên
            </p>
            <TextField
              fullWidth
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Email
            </p>
            <TextField
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Số điện thoại
            </p>
            <TextField
              fullWidth
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Địa chỉ
            </p>
            <TextField
              fullWidth
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Số lượng người lớn
            </p>
            <TextField
              type="number"
              fullWidth
              value={adultCount}
              onChange={(event) => setAdultCount(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Số lượng trẻ em
            </p>
            <TextField
              type="number"
              fullWidth
              value={childrenCount}
              onChange={(event) => setChildrenCount(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Số lượng em bé
            </p>
            <TextField
              type="number"
              fullWidth
              value={kidCount}
              onChange={(event) => setKidCount(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              CustomerId
            </p>
            <TextField
              fullWidth
              value={customerId}
              onChange={(event) => setCustomerId(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              TourId
            </p>
            <TextField
              fullWidth
              value={tourId}
              onChange={(event) => setTourId(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Ngày đặt
            </p>
            <DateTimePicker
              fullWidth
              value={createdDate}
              onChange={(newValue) => setCreatedDate(newValue)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Tổng tiền
            </p>
            <TextField
              fullWidth
              value={sumPrice}
              onChange={(event) => setSumPrice(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
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

          <div className="flex items-center justify-between">
            <Button
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
