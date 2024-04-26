import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout/index";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import currencyVnd from "../../utils/curencyVnd";
import Dialog from "../../components/Dialog";
import { getUserLocal } from "../../utils/getLocalStorage";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";
import cityLabels from "../../utils/citys";
import { get as getTour } from "../../Services/TourServices";

const Tour = () => {
  const username = getUserLocal().username;
  const [dialog, setDialog] = useState(false);
  const areUSureOrder = (choose) => {
    if (choose) {
      axios
        .post(`/api/v1/users/tour/${username}`, data)
        .then(() => {
          handleNotify("success", "Hoàn tất", "Đặt tour thành công!");
        })
        .catch((err) => console.log(err));
      setDialog(false);
    } else {
      setDialog(false);
    }
  };

  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getTour(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const selectCity = (value) => {
    const city = cityLabels.find((item) => item.value === value);
    return city.label;
  };
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className="">
        <h1 className="text-3xl font-bold text-center my-10">
          Thông tin về tour
        </h1>
        <div className="flex">
          <img
            alt="main pictures"
            className="ml-20 w-300"
            src={data.main_image_url}
          />
          <div className="flex flex-col justify-around ml-10">
            <p className="font-bold text-xl leading-7">{data.name}</p>
            <div>
              <p className="text-xs leading-8">{`Nơi khởi hành: ${
                data.addressFrom && selectCity(data.addressFrom)
              }`}</p>
              <p className="text-xs leading-8">{`Nơi đến: ${
                data.addressTo && selectCity(data.addressTo)
              }`}</p>
              <p className="text-xs leading-8">{`Khởi hành: ${data.start_time}`}</p>
              <p className="text-xs leading-8">{`Thời gian: ${data.period} ngày`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto justify-start items-end my-16 w-11/12">
          <div className="flex justify-end items-center mr-5 grow">
            <p className="font-bold leading-5 mr-5 py-5">TỔNG CỘNG</p>
            <p className="font-bold text-xl leading-7 text-right text-red-500 ">
              {currencyVnd(data.prices)}
            </p>
          </div>
          <div
            onClick={() => setDialog(true)}
            className="font-bold cursor-pointer text-white text-base leading-5 rounded-lg py-5 px-28 bg-gradient-to-br from-red-500 to-red-700"
          >
            ĐẶT NGAY
          </div>
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
