import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
import { get as getTour } from "../../services/TourServices";
import {
  Button,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { formatDate } from "../../utils/resolveTime";
import { selectNameCity } from "../../utils/cites";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import MoneyIcon from "@mui/icons-material/Money";
import currencyVnd from "../../utils/currencyVnd";
import DialogCustom from "../../components/Dialog";
import { getUserLocal } from "../../utils/LocalStorage";
import * as OrderServices from "../../services/OrderServices";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import checkoutValidate from "../../validators/CheckoutValidate";
import ChooseHotelDialog from "../../components/Dialog/ChooseHotelDialog";
import * as AuthServices from "../../services/AuthServices";
import EmailVerification from "../../components/EmailVerification";

export default function Checkout() {
  const { tourId } = useParams();
  const userData = getUserLocal();
  const [data, setData] = useState({});
  const [dialog, setDialog] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [address, setAddress] = useState("");
  const [sumPrice, setSumPrice] = useState(0);
  const [openHotel, setOpenHotel] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [singleRoomCount, setSingleRoomCount] = useState(0);
  const [doubleRoomCount, setDoubleRoomCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenEmailVerification, setIsOpenEmailVerification] = useState(false);

  useEffect(() => {
    getTour(tourId)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [tourId]);

  useEffect(() => {
    let total =
      adultCount * data.adultPrice +
      childrenCount * data.childrenPrice +
      kidCount * data.kidPrice;
    if (singleRoomCount > 0)
      total += singleRoomCount * hotel[0]?.singleRoom.price;
    if (doubleRoomCount > 0)
      total += doubleRoomCount * hotel[0]?.doubleRoom.price;
    console.log(total);
    setSumPrice(total || 0);
  }, [
    adultCount,
    childrenCount,
    kidCount,
    data,
    singleRoomCount,
    doubleRoomCount,
  ]);

  const handleOrderTour = async () => {
    try {
      await OrderServices.create({
        fullName,
        email,
        phone,
        address,
        adultCount,
        childrenCount,
        kidCount,
        sumPrice,
        tourId: tourId,
        customerId: userData._id,
        status: "Pending",
        hotel: hotel[0]
          ? {
              id: hotel[0]._id,
              singleRoomCount,
              doubleRoomCount,
              singleRoomPrice: hotel[0].singleRoom.price,
              doubleRoomPrice: hotel[0].doubleRoom.price,
            }
          : {},
      });
      handleNotify("success", "", "Thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error.message);
    }
  };

  const handleVerify = async () => {
    try {
      checkoutValidate({ fullName, email, phone });
      setIsLoading(true);
      await AuthServices.requestVerify(userData._id, email);
      setIsLoading(false);
      setIsOpenEmailVerification(true);
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error.message);
    }
  };

  const handleCheckOtp = async (OTP) => {
    try {
      const response = await AuthServices.checkVerify(userData._id, OTP);
      if (!response.data.isAuthenticated) return;
      setIsLoading(true);
      await handleOrderTour();
      setIsLoading(false);
      setIsOpenEmailVerification(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = (value) => {
    setIsOpenEmailVerification(value);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        {isLoading && <LinearProgress />}
      </div>
      <DefaultLayout>
        <ReactNotifications />
        {!isOpenEmailVerification && (
          <div className="vh-64-84 w-9/12 mx-auto py-10">
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <img
                  className="rounded-md"
                  alt="main pictures"
                  src={data.main_image_url}
                />
              </div>
              <div className="flex items-center col-span-7 px-10">
                <div className="">
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    gutterBottom
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    <span className="font-normal">Khởi hành lúc: </span>
                    {formatDate(data.start_time, "DD/MM/YYYY HH:mm")}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    <span className="font-normal">Thời gian: </span>
                    {`${data.period} ngày`}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    <span className="font-normal">Nơi khởi hành: </span>
                    {`${data.addressFrom && selectNameCity(data.addressFrom)}`}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    <span className="font-normal">Nơi đến: </span>
                    {`${data.addressTo && selectNameCity(data.addressTo)}`}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    <span className="font-normal">Số chỗ còn nhận: </span>
                    {`${data.slotStill || data.slotMax}`}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Typography sx={{ fontWeight: 700 }} variant="h5" gutterBottom>
                Thông tin liên lạc
              </Typography>
              <div className="flex flex-wrap justify-around">
                <TextField
                  className="w-2/5"
                  sx={{
                    marginY: 2,
                  }}
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  label="Họ và tên"
                />
                <TextField
                  className="w-2/5"
                  sx={{
                    marginY: 2,
                  }}
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  label="Email"
                />
                <TextField
                  className="w-2/5"
                  sx={{
                    marginY: 2,
                  }}
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  label="Số điện thoại"
                />
                <TextField
                  className="w-2/5"
                  sx={{
                    marginY: 2,
                  }}
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  label="Địa chỉ"
                />
              </div>
            </div>
            <div className="mt-10">
              <Typography sx={{ fontWeight: 700 }} variant="h5" gutterBottom>
                Hành khách
              </Typography>
              <div className="flex flex-wrap justify-around">
                <div className="flex justify-between w-2/5 items-center border-2 px-4 py-2 my-3">
                  <div>
                    <Typography sx={{ fontWeight: 600 }}>Người lớn</Typography>
                    <Typography variant="subtitle1">
                      Từ 12 tuổi trở lên
                    </Typography>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <IconButton
                      onClick={() =>
                        setAdultCount((pre) => {
                          if (pre === 0) return pre;
                          return pre - 1;
                        })
                      }
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600 }}>
                      {adultCount}
                    </Typography>
                    <IconButton onClick={() => setAdultCount((pre) => pre + 1)}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="flex justify-between w-2/5 items-center border-2 px-4 py-2 my-3">
                  <div>
                    <Typography sx={{ fontWeight: 600 }}>Trẻ em</Typography>
                    <Typography variant="subtitle1">
                      Từ 2 tuổi đến dưới 12 tuổi
                    </Typography>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <IconButton
                      onClick={() =>
                        setChildrenCount((pre) => {
                          if (pre === 0) return pre;
                          return pre - 1;
                        })
                      }
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600 }}>
                      {childrenCount}
                    </Typography>
                    <IconButton
                      onClick={() => setChildrenCount((pre) => pre + 1)}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="flex justify-between w-2/5 items-center border-2 px-4 py-2 my-3 ">
                  <div>
                    <Typography sx={{ fontWeight: 600 }}>Em bé</Typography>
                    <Typography variant="subtitle1">Dưới 2 tuổi</Typography>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <IconButton
                      onClick={() =>
                        setKidCount((pre) => {
                          if (pre === 0) return pre;
                          return pre - 1;
                        })
                      }
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600 }}>{kidCount}</Typography>
                    <IconButton onClick={() => setKidCount((pre) => pre + 1)}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex space-x-4 items-center">
                <Typography sx={{ fontWeight: 700 }} variant="h5" gutterBottom>
                  Chọn khách sạn
                </Typography>
                <Button onClick={() => setOpenHotel(true)}>Chọn</Button>
              </div>
              <div className="px-16">
                {(!hotel || hotel.length === 0) && (
                  <Typography variant="body1">Không chọn</Typography>
                )}
                {hotel?.length > 0 &&
                  hotel.map((elem) => {
                    const singleRoom = elem?.singleRoom;
                    const doubleRoom = elem?.doubleRoom;
                    return (
                      <div key={elem._id}>
                        <div className="flex space-x-2 items-center">
                          <img
                            className="mr-2"
                            width={60}
                            height={60}
                            src={elem.image}
                            alt="Hình ảnh"
                          />
                          <p>{elem.name}</p>
                        </div>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          className="py-3"
                        >
                          {elem?.address}
                        </Typography>
                        <div className="flex space-x-24 w-full">
                          <div>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                              component="div"
                            >
                              {`Phòng đơn tối đa: ${singleRoom?.totalRooms || 0}`}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                              component="div"
                            >
                              {`Phòng đơn còn trống: ${singleRoom?.roomsAvailable || 0}`}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                              component="div"
                            >
                              {`Giá phòng đơn: ${currencyVnd(singleRoom?.price || 0)}`}
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                              component="div"
                            >
                              {`Phòng đôi tối đa: ${doubleRoom?.totalRooms || 0}`}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                              component="div"
                            >
                              {`Phòng đôi còn trống: ${doubleRoom?.roomsAvailable || 0}`}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                              component="div"
                            >
                              {`Giá phòng đôi: ${currencyVnd(doubleRoom?.price || 0)}`}
                            </Typography>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex justify-between w-2/5 items-center border-2 px-4 py-2 my-3">
                            <div>
                              <Typography>Phòng đơn</Typography>
                            </div>
                            <div className="flex space-x-2 items-center">
                              <IconButton
                                onClick={() =>
                                  setSingleRoomCount((pre) => {
                                    if (pre === 0) return pre;
                                    return pre - 1;
                                  })
                                }
                              >
                                <RemoveCircleOutlineIcon />
                              </IconButton>
                              <Typography sx={{ fontWeight: 600 }}>
                                {singleRoomCount}
                              </Typography>
                              <IconButton
                                onClick={() =>
                                  setSingleRoomCount((pre) => pre + 1)
                                }
                              >
                                <AddCircleOutlineIcon />
                              </IconButton>
                            </div>
                          </div>
                          <div className="flex justify-between w-2/5 items-center border-2 px-4 py-2 my-3">
                            <div>
                              <Typography>Phòng đôi</Typography>
                            </div>
                            <div className="flex space-x-2 items-center">
                              <IconButton
                                onClick={() =>
                                  setDoubleRoomCount((pre) => {
                                    if (pre === 0) return pre;
                                    return pre - 1;
                                  })
                                }
                              >
                                <RemoveCircleOutlineIcon />
                              </IconButton>
                              <Typography sx={{ fontWeight: 600 }}>
                                {doubleRoomCount}
                              </Typography>
                              <IconButton
                                onClick={() =>
                                  setDoubleRoomCount((pre) => pre + 1)
                                }
                              >
                                <AddCircleOutlineIcon />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center space-x-20">
                <Typography fontWeight={600} variant="h5">
                  Phương thức thanh toán
                </Typography>
                <div className="flex items-center space-x-2 my-4">
                  <MoneyIcon sx={{ fontSize: 50 }} />
                  <Typography>Tiền mặt</Typography>
                </div>
              </div>
              <div className="">
                {adultCount > 0 && (
                  <Typography>{`Người lớn: ${adultCount} x ${currencyVnd(data?.adultPrice)}`}</Typography>
                )}
                {childrenCount > 0 && (
                  <Typography>{`Trẻ em: ${childrenCount} x ${currencyVnd(data?.childrenPrice)}`}</Typography>
                )}
                {kidCount > 0 && (
                  <Typography>{`Em bé: ${kidCount} x ${currencyVnd(data?.childrenPrice)}`}</Typography>
                )}
                {singleRoomCount > 0 && (
                  <Typography>{`Phòng đơn: ${singleRoomCount} x ${currencyVnd(hotel[0]?.singleRoom.price)}`}</Typography>
                )}
                {doubleRoomCount > 0 && (
                  <Typography>{`Phòng đôi: ${doubleRoomCount} x ${currencyVnd(hotel[0]?.doubleRoom.price)}`}</Typography>
                )}
                <Typography variant="h6">
                  Tổng tiền:{" "}
                  <span className="font-bold text-3xl leading-7 text-red-500 ">
                    {currencyVnd(sumPrice)}
                  </span>
                </Typography>
              </div>
              <div className="my-4">
                <Button
                  onClick={() => setDialog(true)}
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 16,
                    paddingX: 8,
                    paddingY: 2,
                  }}
                  className="bg-gradient-to-br from-red-500 to-red-700"
                >
                  ĐẶT NGAY
                </Button>
              </div>
            </div>
          </div>
        )}
        {isOpenEmailVerification && (
          <EmailVerification
            handleVerify={handleCheckOtp}
            email={email}
            handleBack={handleBack}
          />
        )}
        <DialogCustom
          handleClickAgree={() => {
            setDialog(false);
            handleVerify();
          }}
          openDialog={dialog}
          handleCloseDialog={() => setDialog(false)}
          message={"Bạn có chắc chắn đặt tour này không?"}
        />
        <ChooseHotelDialog
          onClose={setHotel}
          checkInput={hotel}
          open={openHotel}
          setOpen={setOpenHotel}
        />
      </DefaultLayout>
    </div>
  );
}
