import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import axios from "../../utils/axios";
import { getUserLocal } from "../../utils/getLocalStorage";
import currencyVnd from "../../utils/curencyVnd";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import ModalRate from "../../components/ModalRate";

const HistoryBooking = () => {
  const [modal, setModal] = useState(false);
  const username = getUserLocal().username;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get(`/api/v1/users/tour/${username}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  const handleDelete = (index) => {
    const dataUpdate = data.filter((user, i) => i !== index);
    axios
      .put(`/api/v1/users/tour/${username}`, dataUpdate)
      .then(() => {
        setData((prevData) => prevData.filter((user, i) => i !== index));
        handleNotify("success", "Thành công", "Xóa thành công");
      })
      .catch((err) => console.log(err));
  };
  const areUSureOrder = (choose) => {
    if (choose) {
      // axios
      //   .post(`/api/v1/users/tour/${username}`, data)
      //   .then((res) => {
      //     handleNotify('success','Hoàn tất','Đặt tour thành công!')
      //   })
      //   .catch((err) => console.log(err));
      setModal(false);
    } else {
      setModal(false);
    }
  };
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div>
        <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-4/5 mx-auto">
          <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
            Lịch sử booking
          </p>
          {data.map((item, index) => (
            <div
              key={index}
              className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={item.main_image_url}
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-center w-full pb-8 space-y-4 md:space-y-0">
                <div className=" grow flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.name}
                  </h3>
                  <div className=" w-full">
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className=" text-gray-800">Ngày bắt đầu: </span>{" "}
                        {item.start_time}
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className=" text-gray-800">Số ngày: </span>{" "}
                        {item.period}
                      </p>
                    </div>
                    <div className="flex justify-between mr-20 space-x-8 mt-5 items-start ">
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        {currencyVnd(item.prices)}
                      </p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="25"
                          width="25"
                          viewBox="0 0 576 512"
                        >
                          <path
                          fill="yellow"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div
                    onClick={() => handleDelete(index)}
                    className="flex justify-between mx-16 mb-10 items-center space-x-8 cursor-pointer"
                  >
                    <i className="fa-solid fa-trash text-red-400 text-base"></i>
                  </div>
                  <div>
                    <div
                      onClick={() => setModal(true)}
                      class="inline-block cursor-pointer px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                    >
                      Đánh giá
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {modal && (
          <ModalRate
            //Update
            nameProduct={"Bạn hãy đánh giá cho tour này"}
            onDialog={areUSureOrder}
            message={"Đánh giá"}
          />
        )}
      </div>
    </DefaultLayout>
  );
};
export default HistoryBooking;
