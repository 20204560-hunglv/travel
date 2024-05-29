import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PropTypes } from "prop-types";

const CRUDHotelModal = ({
  handleSaveData,
  handleBack,
  data,
  title = "Thêm khách sạn",
}) => {
  const [name, setName] = useState(data?.name || "");
  const [image, setImage] = useState(data?.image || "");
  const [address, setAddress] = useState(data?.address || "");

  const handleSave = async () => {
    await handleSaveData({
      name,
      image,
      address,
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
              Hình ảnh
            </p>
            <TextField
              fullWidth
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Địa chỉ
            </p>
            <TextField
              fullWidth
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
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

CRUDHotelModal.propTypes = {
  handleSaveData: PropTypes.func,
  handleBack: PropTypes.func,
  data: PropTypes.object,
  title: PropTypes.string,
};

export default CRUDHotelModal;
