import LayoutAdmin from "../../../components/Layout/LayoutAdmin";
import React, { useState, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { handleNotify } from "../../../components/Notification/index";
import CrudTourModal from "../../../components/Modal/CRUDTourModal";
import { getAll, deleteTour } from "../../../Services/TourServices";
import HeaderResult from "../../../components/Layout/LayoutAdmin/HeaderResult";
import TableTour from "../../../components/Table/TableTour";

const CrudTour = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [typeChange] = useState("");
  const [dataEdit] = useState({});

  const handleChangeFalse = () => {
    setChange(false);
  };

  const fetchData = async () => {
    try {
      const response = await getAll();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [change]);

  const handleDeleteTour = async (id) => {
    try {
      await deleteTour(id);
      setData((prevData) => prevData.filter((user) => user._id !== id));
      handleNotify("success", "Thành công", "Xóa thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ReactNotifications />
      <LayoutAdmin>
        {change ? (
          <CrudTourModal
            type={typeChange}
            data={dataEdit}
            handleChangeFalse={handleChangeFalse}
          />
        ) : (
          <>
            <HeaderResult setChange={() => setChange(true)} />
            <TableTour data={data} handleDeleteTour={handleDeleteTour} />
          </>
        )}
      </LayoutAdmin>
    </>
  );
};
export default CrudTour;
