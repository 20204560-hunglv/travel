import { useState } from "react";
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

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
    <div className="flex items-center">
      <div className="w-full max-w-sm container mx-auto py-10">
        <h2 className="text-2xl text-center text-gray-900 pb-5">{title}</h2>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs
           font-bold mb-2"
          >
            Tên tài khoản
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={username}
            onChange={handleUserName}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Mật khẩu
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Họ và tên
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
            value={fullName}
            onChange={handleFullName}
          />
        </div>
        <div className="w-full md:w-full mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Giới tính
          </label>
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
              <FormControlLabel value="khac" control={<Radio />} label="Khác" />
            </RadioGroup>
          </div>
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            type="text"
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
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="location"
          >
            Địa chỉ
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            type="text"
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
              format="DD/MM/YYYY"
              value={birthDate}
              onChange={(newDate) => setBirthDate(newDate)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* <button
            className="mt-5 bg-green-400 w-full hover:bg-green-500 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleSave()}
          >
            Lưu
          </button> */}
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

export default CrudUserModal;
