import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout/index";
import { useNavigate, useParams } from "react-router-dom";
import currencyVnd from "../../utils/curencyVnd";
import Dialog from "../../components/Dialog";
import { getUserLocal } from "../../utils/LocalStorage";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import {selectNameCity} from "../../utils/cites";
import { get as getTour, bookTour } from "../../services/TourServices";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapIcon from "@mui/icons-material/Map";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";
import { truncateString } from "../../utils/shortenString";
import {formatDate} from "../../utils/resolveTime"

const SearchItem = ({ item }) => {
  const navigate = useNavigate();

  const handleToBooking = () => {
    navigate(`/tour/${item._id}`);
  };

  const convertDay = (day) => {
    return dayjs(day).format("DD/MM/YYYY");
  };

  return (
    <Card className="h-96 flex flex-col">
      <CardMedia
        component="img"
        sx={{
          height: "50%",
        }}
        image={item.main_image_url}
        alt={item.main_image_url}
      />
      <div onClick={handleToBooking} className="cursor-pointer">
        <CardContent>
          <Typography variant="h6" component="div">
            {truncateString(item.name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {convertDay(item.start_time)}
          </Typography>
        </CardContent>
      </div>
      <CardActions className="flex justify-between">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography className="text-red-500" variant="h6" component="p">
          {currencyVnd(item.prices)}
        </Typography>
      </CardActions>
    </Card>
  );
};

const Tour = () => {
  const userData = getUserLocal();
  const { id } = useParams();
  const navigate = useNavigate();

  const [dialog, setDialog] = useState(false);
  const [data, setData] = useState({});
  const dataCanLike = [
    {
      _id: "66189b8e206156a0ecf81368",
      name: "Combo 2N1D Vịnh Lan Hạ - Du thuyền 5* Stellar Of The Sea ",
      start_time: "Sat Apr 27 2024 16:19:46 GMT+0700 (Giờ Đông Dương)",
      period: "2",
      main_image_url:
        "https://media.travel.com.vn/Tour/tfd_231025094501_201544_shutterstock_366374024.jpg",
      prices: "4990000",
      addressFrom: "hanoi",
      addressTo: "quangninh",
      createdAt: "2024-04-12T02:25:18.299Z",
      updatedAt: "2024-04-12T02:25:18.299Z",
      __v: 0,
      describe: "",
      slotStill: 0,
      tourGuide: "",
      vehicle: "",
      visitLocation: "",
      slotMax: 0,
    },
    {
      _id: "661b96140d47bee52e5e01dd",
      name: "Hà Nội - Nghĩa Lộ - Tú Lệ - Mù Cang Chải",
      start_time: "Wed Apr 24 2024 16:19:46 GMT+0700 (Indochina Time)",
      period: "4",
      main_image_url:
        "https://media.travel.com.vn/Tour/tfd_221212091808_874768.jpg",
      prices: "3990000",
      addressFrom: "hanoi",
      addressTo: "yenbai",
      createdAt: "2024-04-14T08:38:44.174Z",
      updatedAt: "2024-05-01T20:52:04.721Z",
      __v: 0,
    },
    {
      _id: "661b96690d47bee52e5e01e1",
      name: "Cần Thơ - Hà Nội",
      start_time: "Mon Apr 15 2024 16:19:46 GMT+0700 (Indochina Time)",
      period: "3",
      main_image_url:
        "https://media.travel.com.vn/Tour/tfd_220725014536_039495.jpg",
      prices: "5990000",
      addressFrom: "hanoi",
      addressTo: "cantho",
      createdAt: "2024-04-14T08:40:09.512Z",
      updatedAt: "2024-05-01T20:53:27.330Z",
      __v: 0,
    },
  ];

  const areUSureOrder = (choose) => {
    if (choose) {
      bookTour(userData._id, data)
        .then(() => {
          handleNotify("success", "Hoàn tất", "Đặt tour thành công!");
        })
        .catch((err) => console.log(err));
      setDialog(false);
    } else {
      setDialog(false);
    }
  };

  useEffect(() => {
    getTour(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleBookTour = () => {
    if (!userData) {
      navigate("/login");
    } else setDialog(true);
  };

  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className="w-11/12 mx-auto py-10">
        <div className="grid grid-cols-7">
          <img
            alt="main pictures"
            className="col-span-4 rounded-lg"
            src={data.main_image_url}
          />
          <div className="col-span-3 ml-10">
            <Typography sx={{ fontWeight: 700 }} variant="h5" gutterBottom>
              {data.name}
            </Typography>
            <div className="flex items-center">
              <FavoriteIcon color="error" />
              <Typography
                sx={{ paddingLeft: 1, fontSize: 18 }}
                variant="subtitle1"
              >
                {`Đã thích (${data.favourite})`}
              </Typography>
            </div>
            <div className="my-7">
              <p className="font-bold text-3xl leading-7 text-red-500 ">
                {currencyVnd(data.prices)}
                <span className="font-normal text-base text-black">
                  / khách
                </span>
              </p>
            </div>
            <div className="my-7">
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
                <span className="font-normal">Số chỗ còn nhận: </span>
                {`${data.slotStill}`}
              </Typography>
            </div>
            <div>
              <Button
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  paddingX: 8,
                  paddingY: 2,
                }}
                onClick={() => handleBookTour()}
                className="bg-gradient-to-br from-red-500 to-red-700"
              >
                ĐẶT NGAY
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 my-10 mx-5">
          <div className="col-span-1">
            <DirectionsCarIcon
              sx={{ marginBottom: 2 }}
              fontSize="large"
              color="primary"
            />
            <Typography variant="h5" component="div">
              Phương tiện di chuyển
            </Typography>
            <Typography variant="body2" sx={{ paddingX: 1, marginY: 1 }}>
              {data.vehicle}
            </Typography>
          </div>
          <div className="col-span-1">
            <MapIcon
              sx={{ marginBottom: 2 }}
              fontSize="large"
              color="primary"
            />
            <Typography variant="h5" component="div">
              Điểm tham quan
            </Typography>
            <Typography variant="body2" sx={{ paddingX: 1, marginY: 1 }}>
              {data.visitLocation}
            </Typography>
          </div>
          <div className="col-span-1">
            <EmojiPeopleIcon
              sx={{ marginBottom: 2 }}
              fontSize="large"
              color="primary"
            />
            <Typography variant="h5" component="div">
              Số lượng
            </Typography>
            <Typography variant="body2" sx={{ paddingX: 1, marginY: 1 }}>
              {data.slotMax}
            </Typography>
          </div>
        </div>
        <div className="my-10 mx-5">
          <Typography variant="h5" gutterBottom>
            Thông tin hướng dẫn viên
          </Typography>
          <div className="px-4">
            <Typography variant="h6" gutterBottom>
              Lê Dương
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Thôn 5, xã Quỳnh Trang, thị xã Hoàng Mai, tỉnh Nghệ An
            </Typography>
          </div>
        </div>
        <div className="py-10">
          <Typography sx={{marginBottom: 3}} align="center" variant="h5" gutterBottom>
            Có thể bạn sẽ thích
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {dataCanLike.map((item, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <SearchItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      {dialog && (
        <Dialog
          nameProduct={"Bạn có chắc chắn đặt tour này không?"}
          onDialog={areUSureOrder}
          message={"Xác nhận"}
        />
      )}
    </DefaultLayout>
  );
};

export default Tour;
