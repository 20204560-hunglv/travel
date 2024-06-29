import { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { getUserLocal } from "../../utils/LocalStorage";
import * as OrderServices from "../../services/OrderServices";
import { Box, Tab, Tabs } from "@mui/material";
import ListOrder from "./ListOrder";
import { STATUS_DONE } from "../../const/StatusOrder";

const HistoryBooking = () => {
  const userData = getUserLocal();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeData = (type) => {
    return data.filter((item) => item.status === type);
  };
  const fetchData = async () => {
    try {
      const res = await OrderServices.getByCustomer(userData._id);
      setData(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userData._id]);

  return (
    <DefaultLayout>
      {/*<ReactNotifications />*/}
      <div>
        <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-4/5 mx-auto">
          <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
            Lịch sử booking
          </p>
          <Box sx={{ width: "100%", marginY: "12px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Đã xác nhận" value="1" />
                <Tab label="Đang chờ" value="2" />
                <Tab label="Hoàn thành" value="3" />
                <Tab label="Đã hủy" value="4" />
              </Tabs>
            </Box>
          </Box>
          {value === "1" && (
            <ListOrder
              status={"Confirmed"}
              data={handleChangeData("Confirmed")}
              fetchData={fetchData}
            />
          )}
          {value === "2" && (
            <ListOrder
              status={"Pending"}
              data={handleChangeData("Pending")}
              fetchData={fetchData}
            />
          )}
          {value === "3" && (
            <ListOrder
              status={STATUS_DONE}
              data={handleChangeData(STATUS_DONE)}
              fetchData={fetchData}
            />
          )}
          {value === "4" && (
            <ListOrder
              status={"Cancelled"}
              data={handleChangeData("Cancelled")}
              fetchData={fetchData}
            />
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};
export default HistoryBooking;
