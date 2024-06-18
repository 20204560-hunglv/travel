import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
import { get as getTour } from "../../services/TourServices";
import { Button, TextField, Typography } from "@mui/material";
import { formatDate } from "../../utils/resolveTime";
import { selectNameCity } from "../../utils/cites";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import MoneyIcon from "@mui/icons-material/Money";
import currencyVnd from "../../utils/currencyVnd";
import DialogCustom from "../../components/Dialog";

export default function Checkout() {
  const { tourId } = useParams();
  const [data, setData] = useState({});
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    getTour(tourId)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [tourId]);

  return (
    <DefaultLayout>
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
              label="Họ và tên"
            />
            <TextField
              className="w-2/5"
              sx={{
                marginY: 2,
              }}
              label="Email"
            />
            <TextField
              className="w-2/5"
              sx={{
                marginY: 2,
              }}
              label="Số điện thoại"
            />
            <TextField
              className="w-2/5"
              sx={{
                marginY: 2,
              }}
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
                <Button>
                  <RemoveCircleOutlineIcon />
                </Button>
                <Typography sx={{ fontWeight: 600 }}>1</Typography>
                <Button>
                  <AddCircleOutlineIcon />
                </Button>
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
                <Button>
                  <RemoveCircleOutlineIcon />
                </Button>
                <Typography sx={{ fontWeight: 600 }}>1</Typography>
                <Button>
                  <AddCircleOutlineIcon />
                </Button>
              </div>
            </div>
            <div className="flex justify-between w-2/5 items-center border-2 px-4 py-2 my-3 ">
              <div>
                <Typography sx={{ fontWeight: 600 }}>Em bé</Typography>
                <Typography variant="subtitle1">Dưới 2 tuổi</Typography>
              </div>
              <div className="flex space-x-2 items-center">
                <Button>
                  <RemoveCircleOutlineIcon />
                </Button>
                <Typography sx={{ fontWeight: 600 }}>1</Typography>
                <Button>
                  <AddCircleOutlineIcon />
                </Button>
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
                {currencyVnd(data.prices)}
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
          alert("Hello");
        }}
        openDialog={dialog}
        handleCloseDialog={() => setDialog(false)}
        message={"Bạn có chắc chắn đặt tour này không?"}
      />
    </DefaultLayout>
  );
}
