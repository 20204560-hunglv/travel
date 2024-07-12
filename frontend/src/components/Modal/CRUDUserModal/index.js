import { useState } from "react";
import {
  Button,
  Container,
  FormControlLabel,
  IconButton,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Require from "../../Require";
import { handleNotify } from "../../Notification";
import checkUserModal from "../../../services/validates/checkUserModal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CrudUserModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm tài khoản",
}) => {
  const [showPass, setShowPass] = useState(false);
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
    try {
      checkUserModal({
        username,
        password,
        email,
        numberPhone,
      });
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
                Tên tài khoản
                <Require />
              </>
            }
            value={username}
            onChange={handleUserName}
          />
          <div className="relative">
            <TextField
              size="small"
              fullWidth
              label={
                <>
                  Mật khẩu
                  <Require />
                </>
              }
              type={showPass ? "text" : "password"}
              value={password}
              onChange={handlePassword}
            />
            <div className="absolute top-0 right-0">
              <IconButton
                onClick={() => {
                  setShowPass((pre) => !pre);
                }}
              >
                {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </div>
          </div>
          <TextField
            size="small"
            fullWidth
            label="Họ và tên"
            value={fullName}
            onChange={handleFullName}
          />
          <div>
            <InputLabel>Giới tính</InputLabel>
            <RadioGroup row value={gender} onChange={handleGender}>
              <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
              <FormControlLabel value="nam" control={<Radio />} label="Nam" />
              <FormControlLabel value="khac" control={<Radio />} label="Khác" />
            </RadioGroup>
          </div>
        </div>
        <div className="space-y-5 px-16">
          <TextField
            size="small"
            fullWidth
            label={
              <>
                Email
                <Require />
              </>
            }
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <TextField
            size="small"
            fullWidth
            type="text"
            label="Số điện thoại"
            value={numberPhone}
            onChange={handleNumberPhone}
          />
          <TextField
            size="small"
            fullWidth
            label="Địa chỉ"
            value={address}
            onChange={handleAddress}
          />
          <div className="content-center h-10 text-404040 w-full">
            <DatePicker
              fullWidth
              label="Ngày Sinh"
              format="DD/MM/YYYY"
              value={birthDate}
              onChange={(newDate) => setBirthDate(newDate)}
            />
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default CrudUserModal;
