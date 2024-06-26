import { useState } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PropTypes } from "prop-types";

const CRUDGuideModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm hướng dẫn viên",
}) => {
  const [fullName, setFullName] = useState(data?.fullName || "");
  const [email, setEmail] = useState(data?.email || "");
  const [numberPhone, setNumberPhone] = useState(data?.numberPhone || "");
  const [address, setAddress] = useState(data?.address || "");
  const [gender, setGender] = useState(data?.gender || "");
  const [CCCD, setCCCD] = useState(data?.CCCD || "");
  const [birthday, setBirthday] = useState(
    (data?.birthday && dayjs(data.birthday)) || null,
  );

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleNumberPhone = (event) => {
    setNumberPhone(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleSave = async () => {
    await handleSaveData({
      fullName,
      email,
      numberPhone,
      address,
      gender,
      CCCD,
      birthday: birthday ? birthday?.format() : birthday,
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
            <TextField fullWidth value={fullName} onChange={handleFullName} />
          </div>
          <div className="w-full md:w-full mb-6">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Giới tính
            </p>
            <div className="flex">
              <RadioGroup
                id="radio-buttons-gender"
                row
                aria-labelledby="radio-buttons-gender"
                name="gender-radio-buttons-group"
                value={gender}
                onChange={handleGender}
              >
                <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
                <FormControlLabel value="nam" control={<Radio />} label="Nam" />
                <FormControlLabel
                  value="khac"
                  control={<Radio />}
                  label="Khác"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Email
            </p>
            <TextField fullWidth value={email} onChange={handleEmail} />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
              htmlFor="phone-input"
            >
              SĐT
            </label>
            <TextField
              className="w-full"
              id="phone-input"
              variant="outlined"
              type="text"
              value={numberPhone}
              onChange={handleNumberPhone}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Địa chỉ
            </p>
            <TextField fullWidth value={address} onChange={handleAddress} />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Căn cước công dân
            </p>
            <TextField
              fullWidth
              value={CCCD}
              onChange={(event) => setCCCD(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3">
              Ngày sinh
            </p>
            <div className="content-center h-10 text-404040 w-full">
              <DatePicker
                format="DD/MM/YYYY"
                value={birthday}
                onChange={(newDate) => setBirthday(newDate)}
              />
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

CRUDGuideModal.propTypes = {
  handleSaveData: PropTypes.func,
  handleBack: PropTypes.func,
  data: PropTypes.object,
  title: PropTypes.string,
};

export default CRUDGuideModal;
