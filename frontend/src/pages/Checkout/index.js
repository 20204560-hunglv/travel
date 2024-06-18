import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
import { get as getTour } from "../../services/TourServices";
import { Button, IconButton, TextField, Typography } from "@mui/material";
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
  const [sumPrice, setSumPrice] = useState(1000000);

  useEffect(() => {
    getTour(tourId)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [tourId]);

  useEffect(() => {
    const total =
      adultCount * data.adultPrice +
      childrenCount * data.childrenPrice +
      kidCount * data.kidPrice;
    console.log(total);
    setSumPrice(total);
  }, [adultCount, childrenCount, kidCount]);

  const handleOrderTour = async () => {
    try {
      checkoutValidate({ fullName, email, phone });
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
      });
      handleNotify("success", "", "Thành công");
    } catch (error) {
      console.log(error);
      handleNotify("warning", "", error.message);
    }
  };
  // console.log(data);

  return (
    <DefaultLayout>
      <ReactNotifications />
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
              <Typography sx={{ fontWeight: 700 }} variant="h5" gutterBottom>
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
                <Typography variant="subtitle1">Từ 12 tuổi trở lên</Typography>
              </div>
              <div className="flex space-x-2 items-center">
                <IconButton
                  onClick={() =>
                    setAdultCount((pre) => {
                      if (pre == 0) return pre;
                      return pre - 1;
                    })
                  }
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography sx={{ fontWeight: 600 }}>{adultCount}</Typography>
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
                      if (pre == 0) return pre;
                      return pre - 1;
                    })
                  }
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography sx={{ fontWeight: 600 }}>
                  {childrenCount}
                </Typography>
                <IconButton onClick={() => setChildrenCount((pre) => pre + 1)}>
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
                      if (pre == 0) return pre;
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
          <div className="flex items-center space-x-20">
            <Typography fontWeight={600} variant="h5">
              Phương thức thanh toán
            </Typography>
            <div className="flex items-center space-x-2 my-4">
              <MoneyIcon sx={{ fontSize: 50 }} />
              <Typography>Tiền mặt</Typography>
            </div>
          </div>
          <div className="my-4">
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
      <DialogCustom
        handleClickAgree={() => {
          setDialog(false);
          handleOrderTour();
        }}
        openDialog={dialog}
        handleCloseDialog={() => setDialog(false)}
        message={"Bạn có chắc chắn đặt tour này không?"}
      />
    </DefaultLayout>
  );
}
