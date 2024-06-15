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

const CrudUserModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm tài khoản",
}) => {
  const [fullName, setFullName] = useState((data && data.fullName) || "");
  const [username, setUserName] = useState((data && data.username) || "");
  const [password, setPassword] = useState((data && data.password) || "");
  const [email, setEmail] = useState((data && data.email) || "");
  const [numberPhone, setNumberPhone] = useState(
    (data && data.numberPhone) || ""
  );
  const [address, setAddress] = useState((data && data.address) || "");
  const [gender, setGender] = useState((data && data.gender) || "");
  const [birthDate, setBirthDate] = useState(
    (data && data.birthDate && dayjs(data.birthDate)) || null
  );

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
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
      username,
      password,
      email,
      numberPhone,
      address,
      gender,
      birthDate: birthDate ? birthDate.format() : birthDate,
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
              Tên tài khoản
            </p>
            <TextField
              className="w-full"
              id="username-input"
              variant="outlined"
              type="text"
              placeholder="Tên tài khoản"
              value={username}
              onChange={handleUserName}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Mật khẩu
            </p>
            <TextField
              className="w-full"
              id="password-input"
              variant="outlined"
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Họ và tên
            </p>
            <TextField
              className="w-full"
              id="fullName-input"
              variant="outlined"
              type="text"
              placeholder="Họ và tên"
              value={fullName}
              onChange={handleFullName}
            />
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
            <TextField
              className="w-full"
              id="email-input"
              variant="outlined"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
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
              placeholder="Số điện thoại"
              value={numberPhone}
              onChange={handleNumberPhone}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Địa chỉ
            </p>
            <TextField
              className="w-full"
              id="location-input"
              variant="outlined"
              type="text"
              placeholder="Địa chỉ"
              value={address}
              onChange={handleAddress}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3">
              Ngày sinh
            </p>
            <div className="content-center h-10 text-404040 w-full">
              <DatePicker
              sx={{
                width: '100%'
              }
              }
                format="DD/MM/YYYY"
                value={birthDate}
                onChange={(newDate) => setBirthDate(newDate)}
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

export default CrudUserModal;
