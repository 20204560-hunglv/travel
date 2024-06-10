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

const CRUDDiscountModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "",
}) => {
  const [name, setName] = useState(data?.name || "");
  const [startDate, setStartDate] = useState(
    (data?.startDate && dayjs(data.startDate)) || null
  );
  const [endDate, setEndDate] = useState(
    (data?.endDate && dayjs(data.endDate)) || null
  );
  const [discountValue, setDiscountValue] = useState(data?.discountValue || "");
  const [isActive, setIsActive] = useState(data?.isActive || null);

  const handleSave = async () => {
    await handleSaveData({
      name,
      startDate,
      endDate,
      discountValue,
      isActive,
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
              Tên khách sạn
            </p>
            <TextField
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Giá trị khuyến mãi (%)
            </p>
            <TextField
              fullWidth
              value={discountValue}
              onChange={(event) => setDiscountValue(event.target.value)}
              type="number"
            />
          </div>
          <div className="w-full mb-5">
            <p
              className="block uppercase tracking-wide text-gray-700 text-xs 
          font-bold mb-2"
            >
              Ngày bắt đầu
            </p>
            <DateTimePicker
              fullWidth
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ngày kết thúc
            </p>
            <DateTimePicker
              fullWidth
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Áp dụng khuyến mãi
            </p>
            <div className="flex">
              <RadioGroup
                id="radio-isActive"
                row
                name="gender-radio-isActive-group"
                value={isActive}
                onChange={(event) => setIsActive(event.target.value)}
              >
                <FormControlLabel value={true} control={<Radio />} label="Có" />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Không"
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

CRUDDiscountModal.propTypes = {
  handleSaveData: PropTypes.func,
  handleBack: PropTypes.func,
  data: PropTypes.object,
  title: PropTypes.string,
};

export default CRUDDiscountModal;
