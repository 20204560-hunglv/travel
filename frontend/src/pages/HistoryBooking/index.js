import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import axios from "../../utils/axios";
import { getUserLocal } from "../../utils/getLocalStorage";
import currencyVnd from "../../utils/curencyVnd";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";

const HistoryBooking = () => {
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
  const handleDelete=(index)=>{
    const dataUpdate = data.filter((user,i) => i !== index)
    axios
      .put(`/api/v1/users/tour/${username}`,dataUpdate)
      .then(() => {
        setData((prevData) => prevData.filter((user,i) => i !== index));
        handleNotify("success", "Thành công", "Xóa thành công");
      })
      .catch((err) => console.log(err));
  }
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
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className=" grow flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.name}
                  </h3>
                  <div className="flex justify-between w-full">
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
                    <div className="flex justify-between mr-20 space-x-8 items-start ">
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        {currencyVnd(item.prices)}
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                onClick={()=>handleDelete(index)}
                className="flex justify-between mx-16 items-center space-x-8 cursor-pointer">
                  <i className="fa-solid fa-trash text-red-400 text-base"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default HistoryBooking;
