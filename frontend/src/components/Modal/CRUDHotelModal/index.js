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
  const [city, setCity] = useState(data?.city || "");
  const [email, setEmail] = useState(data?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(data?.phoneNumber || "");
  const [singleRoom, setSingleRoom] = useState(
    data?.singleRoom || {
      roomsAvailable: 0,
      totalRooms: 0,
      price: 0,
    }
  );
  const [doubleRoom, setDoubleRoom] = useState(
    data?.doubleRoom || {
      roomsAvailable: 0,
      totalRooms: 0,
      price: 0,
    }
  );

  const handleSave = async () => {
    await handleSaveData({
      name,
      image,
      address,
      city,
      email,
      phoneNumber,
      singleRoom,
      doubleRoom
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
              multiline
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Thành phố
            </p>
            <TextField
              fullWidth
              value={city}
              onChange={(event) => setCity(event.target.value)}
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
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </p>
            <TextField
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Số điện thoại
            </p>
            <TextField
              fullWidth
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tổng số phòng đơn
            </p>
            <TextField
              fullWidth
              type="number"
              value={singleRoom.totalRooms}
              onChange={(event) =>
                setSingleRoom((pre) => {
                  return {
                    ...pre,
                    ["totalRooms"]: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Số phòng đơn còn trống
            </p>
            <TextField
              fullWidth
              type="number"
              value={singleRoom.roomsAvailable}
              onChange={(event) =>
                setSingleRoom((pre) => {
                  return {
                    ...pre,
                    ["roomsAvailable"]: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Giá phòng đơn
            </p>
            <TextField
              fullWidth
              type="number"
              value={singleRoom.price}
              onChange={(event) =>
                setSingleRoom((pre) => {
                  return {
                    ...pre,
                    ["price"]: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tổng số phòng đôi
            </p>
            <TextField
              type="number"
              fullWidth
              value={doubleRoom.totalRooms}
              onChange={(event) =>
                setDoubleRoom((pre) => {
                  return {
                    ...pre,
                    ["totalRooms"]: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Số phòng đôi còn trống
            </p>
            <TextField
              type="number"
              fullWidth
              value={doubleRoom.roomsAvailable}
              onChange={(event) =>
                setDoubleRoom((pre) => {
                  return {
                    ...pre,
                    ["roomsAvailable"]: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="w-full mb-5">
            <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Giá phòng đôi
            </p>
            <TextField
              fullWidth
              type="number"
              value={doubleRoom.price}
              onChange={(event) =>
                setDoubleRoom((pre) => {
                  return {
                    ...pre,
                    ["price"]: event.target.value,
                  };
                })
              }
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
