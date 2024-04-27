import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { getUserLocal } from "../../utils/getLocalStorage";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import {
  get as getProfile,
  save as saveProfile,
} from "../../Services/ProfileServices";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const Profile = () => {
  const storedUserDataString = getUserLocal();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState(null);

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleSave = () => {
    saveProfile(storedUserDataString.username, {
      fullName: fullName,
      email: email,
      address: address,
      gender: gender,
    })
      .then(() => {
        handleNotify("success", "Thành công", "Lưu thông tin thành công!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile(storedUserDataString.username)
      .then((response) => {
        if (response.data.fullname) setFullName(response.data.fullname);
        if (response.data.email) setEmail(response.data.email);
        if (response.data.address) setAddress(response.data.address);
        if (response.data.gender) setGender(response.data.gender);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [storedUserDataString.username]);

  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className="min-h-screen py-5 font-mono bg-slate-200">
        <div className="max-w-2xl mx-auto bg-white rounded-xl">
          <div className="inputs w-full p-6 mx-auto">
            <h2 className="text-2xl text-center text-gray-900">
              Thông tin tài khoản
            </h2>
            <div className="mt-6 pt-4">
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                  <p className="block uppercase tracking-wide text-gray-700 text-xs content-center text-end">
                    Tên tài khoản
                  </p>
                  <p className="col-span-2  block w-full bg-white text-gray-900  rounded-md py-3 leading-tight focus:outline-none  focus:border-gray-500">
                    {storedUserDataString.username}
                  </p>
                </div>
                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs content-center text-end"
                    htmlFor="full-name"
                  >
                    Họ và tên
                  </label>
                  <TextField
                    className="col-span-2 w-full"
                    id="full-name"
                    variant="outlined"
                    type="text"
                    placeholder="Họ và tên"
                    value={fullName}
                    onChange={handleFullName}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                  <label
                    className="content-center text-end block uppercase tracking-wide text-gray-700 text-xs"
                    htmlFor="email-input"
                  >
                    Email
                  </label>
                  <TextField
                    className="col-span-2 w-full"
                    id="email-input"
                    variant="outlined"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6 grid grid-cols-4 gap-4">
                  <label
                    className="block content-center text-end uppercase tracking-wide text-gray-700 text-xs"
                    htmlFor="address-input"
                  >
                    Địa chỉ
                  </label>
                  <TextField
                    className="col-span-2 w-full"
                    id="address-input"
                    variant="outlined"
                    type="text"
                    placeholder="Địa chỉ"
                    value={address}
                    onChange={handleAddress}
                  />
                </div>
                <div className="w-full md:w-full px-3 grid grid-cols-4 gap-4">
                  <p className="content-center text-end block uppercase tracking-wide text-gray-700 text-xs">
                    Giới tính
                  </p>
                  <div className="flex col-span-2">
                    {/* <div className="flex items-center px-4">
                      <input
                        id="gender-radio-1"
                        type="radio"
                        value="nam"
                        name="gender-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={handleGender}
                        checked={gender === "nam"}
                      />
                      <label
                        htmlFor="gender-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Nam
                      </label>
                    </div> */}
                    <RadioGroup
                      id="radio-buttons-gender"
                      row
                      aria-labelledby="radio-buttons-gender"
                      name="gender-radio-buttons-group"
                      value={gender}
                      onChange={handleGender}
                    >
                      <FormControlLabel
                        value="nu"
                        control={<Radio />}
                        label="Nữ"
                      />
                      <FormControlLabel
                        value="nam"
                        control={<Radio />}
                        label="Nam"
                      />
                    </RadioGroup>
                    {/* <div className="flex items-center ml-4">
                      <input
                        id="gender-radio-2"
                        type="radio"
                        value="nu"
                        checked={gender === "nu"}
                        onChange={handleGender}
                        name="gender-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="gender-radio-2"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Nữ
                      </label>
                    </div> */}
                  </div>
                </div>
                <div className="w-full md:w-full mt-4 px-3 grid grid-cols-4 gap-4">
                  <div className="content-center text-end">
                    <p className="uppercase tracking-wide text-gray-700 text-xs">
                      Ngày sinh
                    </p>
                  </div>
                  <div className="content-center h-10 text-404040 col-span-2">
                    <DatePicker
                      value={birthDate}
                      onChange={(newDate) => setBirthDate(newDate)}
                    />
                  </div>
                </div>
                <div className="personal w-full  pt-4">
                  <div className="flex justify-end">
                    <Button
                      sx={{
                        py: 2,
                        px: 4,
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
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Profile;
