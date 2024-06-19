import { Paper, Typography } from "@mui/material";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
import * as DiscountServices from "../../services/DiscountServices";
import CardTour from "../../components/Card/CardTour";

const Discount = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DiscountServices.getAllByAdmin();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Paper>
        <div className="vh-64-84 w-10/12 mx-auto py-4">
          <div className="mb-10">
            <Typography variant="h3" align="center">
              Danh sách khuyến mãi
            </Typography>
          </div>
          {data.map((elem) => (
            <div key={elem._id}>
              <Typography align="center" variant="h4">
                {elem.name}
              </Typography>
              {elem.tours.map((tour) => (
                <CardTour
                  key={tour._id}
                  name={tour.name}
                  start_time={tour.start_time}
                  adultPrice={tour.adultPrice}
                  discountValue={elem.discountValue}
                  id={tour._id}
                />
              ))}
            </div>
          ))}
        </div>
      </Paper>
    </DefaultLayout>
  );
};

export default Discount;
