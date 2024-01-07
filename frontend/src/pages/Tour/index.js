import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout/index";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import currencyVnd from "../../utils/curencyVnd";
import styles from "./style.module.css";
import Dialog from "../../components/Dialog";
import { getUserLocal } from "../../utils/getLocalStorage";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../components/Notification/index";

const Tour = () => {
  const username = getUserLocal().username;
  const [dialog, setDialog] = useState(false);
  const areUSureOrder = (choose) => {
    if (choose) {
      axios
        .post(`/api/v1/users/tour/${username}`, data)
        .then((res) => {
          handleNotify('success','Hoàn tất','Đặt tour thành công!')
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
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get(`/api/v1/tours/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <DefaultLayout>
      <ReactNotifications />
      <div className={`${styles.main}`}>
        <h1 className={styles.heading}>Thông tin về tour</h1>
        <div className={styles.contain}>
          <img src={data.main_image_url} />
          <div className={styles.content}>
            <p className={styles.title}>{data.name}</p>
            <div className={styles.detail}>
              <p>{`Khởi hành ${data.start_time}`}</p>
              <p>{`Thời gian ${data.period} ngày`}</p>
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
          //Update
          nameProduct={"Bạn có chắc chắn đặt tour này không?"}
          onDialog={areUSureOrder}
          message={"Xác nhận"}
        />
      )}
    </DefaultLayout>
  );
};
export default Tour;
