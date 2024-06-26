import { formatDate } from "../../utils/resolveTime";
import currencyVnd from "../../utils/currencyVnd";
import { handleNotify } from "../../components/Notification";
import * as OrderServices from "../../services/OrderServices";
import EmailVerification from "../../components/EmailVerification";
import { useState } from "react";
import { getUserLocal } from "../../utils/LocalStorage";
import * as AuthServices from "../../services/AuthServices";
import { LinearProgress } from "@mui/material";

export default function ListOrder({ data, fetchData, status }) {
  const userData = getUserLocal();

  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    try {
      await OrderServices.edit({
        id: orderId,
        data: {
          status: "Cancelled",
        },
      });
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

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="w-full">
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
                    {item.rate && (
                      <div className="flex items-center bg-white p-3 shadow-lg shadow-slate-200 rounded-lg">
                        <p className="text-slate-900 text-lg font-bold">
                          {item.rate}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="25"
                          width="25"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="#FAEF9B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-full w-40">
                {status !== "Cancelled" && (
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
                <div>
                  <div
                    onClick={() => {
                      console.log("click");
                      // setIndexRate(index);
                      // setRate(item.rate);
                      // setModal(true);
                    }}
                    className="inline-block cursor-pointer px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                  >
                    Đánh giá
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="fixed top-0 left-0 w-full z-20">
        {isLoading && <LinearProgress />}
      </div>
      {open && (
        <div className="fixed top-0 left-0 w-full z-10">
          <EmailVerification
            email={userData.email}
            handleBack={() => setOpen(false)}
            handleVerify={handleCheckOtp}
          />
        </div>
      )}
    </>
  );
}
