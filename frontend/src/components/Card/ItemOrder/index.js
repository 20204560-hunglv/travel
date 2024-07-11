import { Paper, Rating, Typography } from "@mui/material";
import { STATUS_DONE } from "../../../const/StatusOrder";
import currencyVnd from "../../../utils/currencyVnd";
import { formatDate } from "../../../utils/resolveTime";
import * as AuthServices from "../../../services/AuthServices";
import { useState } from "react";
import ChooseRating from "../../Dialog/ChooseRating";
import * as OrderServices from "../../../services/OrderServices";
import { handleNotify } from "../../Notification";
import VerifyEmail from "../../Dialog/VerifyEmail";

export default function ItemOrder({
  item,
  status,
  setIsLoading,
  userData,
  fetchData,
}) {
  const [openRating, setOpenRating] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [rating, setRating] = useState(item?.rating || null);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await Promise.all([
        OrderServices.edit({
          id: orderId,
          data: {
            status: "Cancelled",
          },
        }),
        OrderServices.updateSlotStill({
          field: "slotStill",
          value: 1,
          tourId: item.tour?._id,
        }),
      ]);
      fetchData();
      handleNotify("success", "Thành công", "Hủy tour thành công");
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckOtp = async (OTP) => {
    try {
      const response = await AuthServices.checkVerify(userData._id, OTP);
      if (!response.data.isAuthenticated) {
        handleNotify("warning", "", "OTP không chính xác");
        return;
      }
      setIsLoading(true);
      await handleDelete();
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const requestDelete = async () => {
    setIsLoading(true);
    await AuthServices.requestVerify(userData._id, userData.email);
    setIsLoading(false);
    setOpen(true);
  };
  const handleSave = async (data) => {
    try {
      setRating(data);
      await OrderServices.edit({
        id: orderId,
        data: {
          rating: data,
        },
      });
      fetchData();
      handleNotify("success", "Thành công", "Đánh giá thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img
            className="w-full hidden md:block"
            src={item.tour.main_image_url}
            alt="dress"
          />
          <img
            className="w-full md:hidden"
            src={item.tour.main_image_url}
            alt="dress"
          />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-center w-full pb-8 space-y-4 md:space-y-0">
          <div className=" grow flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
              {item.tour.name}
            </h3>
            <div className=" w-full">
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm leading-none text-gray-800">
                  <span className=" text-gray-800">Ngày bắt đầu: </span>{" "}
                  {formatDate(item.tour.start_time)}
                </p>
                <p className="text-sm leading-none text-gray-800">
                  <span className=" text-gray-800">Số ngày: </span>{" "}
                  {item.tour.period}
                </p>
              </div>
              <div className="flex justify-between mr-20 space-x-8 mt-5 items-start ">
                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                  {currencyVnd(item.sumPrice)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full w-40">
            {status !== "Cancelled" && status !== STATUS_DONE && (
              <div
                onClick={() => {
                  setOrderId(item._id);
                  requestDelete();
                }}
                className="flex justify-between mx-16 mb-10 items-center space-x-8 cursor-pointer"
              >
                <i className="fa-solid fa-trash text-red-400 text-base"></i>
              </div>
            )}
            {status === STATUS_DONE && !rating && (
              <div>
                <div
                  onClick={() => {
                    setOrderId(item._id);
                    setOpenRating(true);
                  }}
                  className="inline-block cursor-pointer px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                >
                  Đánh giá
                </div>
              </div>
            )}
            {status === STATUS_DONE && rating && (
              <Paper className="px-5 py-3">
                <Rating value={rating?.rate} />
                <Typography variant="subtitle1">{rating.review}</Typography>
              </Paper>
            )}
          </div>
        </div>
      </div>
      <ChooseRating
        openDialog={openRating}
        handleCloseDialog={() => setOpenRating(false)}
        handleClickAgree={handleSave}
      />
      <VerifyEmail
        openDialog={open}
        email={userData.email}
        handleCloseDialog={() => setOpen(false)}
        handleClickAgree={handleCheckOtp}
      />
    </div>
  );
}
