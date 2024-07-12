import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout/index";
import { useNavigate, useParams } from "react-router-dom";
import currencyVnd from "../../utils/currencyVnd";
import { getUserLocal } from "../../utils/LocalStorage";
import { selectNameCity } from "../../utils/cites";
import { get as getTour } from "../../services/TourServices";
import * as DiscountServices from "../../services/DiscountServices";
import * as FavoriteServices from "../../services/FavoriteServices";
import { Button, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapIcon from "@mui/icons-material/Map";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Grid from "@mui/material/Unstable_Grid2";
import { formatDate } from "../../utils/resolveTime";
import ItemTour from "./../../components/Card/ItemTour";

const Tour = () => {
  const userData = getUserLocal();
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [discount, setDiscount] = useState();
  const [favorite, setFavorite] = useState();
  const dataCanLike = [
    {
      adultPrice: 1000000,
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
      adultPrice: 1000000,
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
      adultPrice: 1000000,
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
  const fetchData = async () => {
    try {
      const resp = await getTour(id);
      setData(resp);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFavorite = async () => {
    try {
      const resp = await FavoriteServices.get(id, userData._id);
      setFavorite(resp);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFavorite = async () => {
    try {
      if (favorite) {
        await FavoriteServices.remove(favorite._id);
      } else await FavoriteServices.create(id, userData._id);
      fetchData();
      fetchFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  useEffect(() => {
    if (data?.discountId !== "false") {
      DiscountServices.getOne(data?.discountId)
        .then((discount) => setDiscount(discount))
        .catch((e) => console.log(e));
    }
  }, [data]);
  useEffect(() => {
    fetchFavorite();
  }, []);

  const handleBookTour = () => {
    if (!userData) {
      navigate("/login");
    } else {
      navigate(`/checkout/${id}`);
    }
  };

  return (
    <DefaultLayout>
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
              <IconButton onClick={() => handleFavorite()}>
                <FavoriteIcon color={favorite ? "error" : "disabled"} />
              </IconButton>
              <Typography
                sx={{ paddingLeft: 1, fontSize: 18 }}
                variant="subtitle1"
              >
                {`${favorite ? "Đã thích" : "Yêu thích"} (${data.favorites || 0})`}
              </Typography>
            </div>
            <div className="my-7">
              {discount ? (
                <div>
                  <Typography className="line-through" variant="subtitle1">
                    {currencyVnd(data.adultPrice)}
                    <span className="font-normal text-base text-black">
                      / khách
                    </span>
                  </Typography>
                  <p className="font-bold text-3xl leading-7 text-red-500 ">
                    {currencyVnd(
                      data.adultPrice * (1 - discount.discountValue / 100)
                    )}
                    <span className="font-normal text-base text-black">
                      / khách
                    </span>
                  </p>
                </div>
              ) : (
                <p className="font-bold text-3xl leading-7 text-red-500 ">
                  {currencyVnd(data.adultPrice)}
                  <span className="font-normal text-base text-black">
                    / khách
                  </span>
                </p>
              )}
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
                {data.slotStill || data.slotMax}
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
          {data.tourGuide?.map((elem) => (
            <div key={elem._id} className="px-4">
              <Typography variant="h6" gutterBottom>
                {`${elem.fullName} - ${elem.numberPhone}`}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {elem.address}
              </Typography>
            </div>
          ))}
          {data.tourGuide?.length === 0 && (
            <Typography>Chưa cập nhật</Typography>
          )}
        </div>
        <div className="py-10">
          <Typography
            sx={{ marginBottom: 3 }}
            align="center"
            variant="h5"
            gutterBottom
          >
            Có thể bạn sẽ thích
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {dataCanLike.map((item) => (
              <Grid xs={2} sm={4} md={4} key={item._id}>
                <ItemTour item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tour;
