import { Button, Typography } from "@mui/material";
import currencyVnd from "../../utils/currencyVnd";
import { formatDate } from "../../utils/resolveTime";
import { useNavigate } from "react-router-dom";

export default function CardTour({
  name,
  start_time,
  adultPrice,
  discountValue,
  id,
}) {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto p-10 md:p-5 antialiased ">
      <article className=" border shadow-666666 flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-1">
        <img
          className="w-full max-h-[400px] object-cover md:w-52"
          src="https://media.travel.com.vn/LastMinute/lm_240612052135_532551_shutterstock.jpg"
          alt=""
        />
        <div className="w-full">
          <div className="p-5 pb-10">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            {/* <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              The Magnificent Bogra
            </h1> */}
            {/* <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              Located in Rajshahi Division, Bogra is one of the oldest and most
              fascinating towns in Bangladesh
            </p> */}
            <Typography variant="body2" color="text.secondary">
              {formatDate(start_time, "DD/MM/YYYY HH:mm")}
            </Typography>
          </div>
          <div className="bg-blue-50 p-4">
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="my-1">
                  <p className="font-bold text-3xl leading-7 text-red-500 ">
                    {currencyVnd((adultPrice * discountValue) / 100)}
                    <span className="font-normal text-base text-black">
                      / khách
                    </span>
                  </p>
                </div>
                <div className="my-1">
                  <p className="font-bold text-xl leading-7 text-red-500 line-through">
                    {currencyVnd(adultPrice)}
                    <span className="font-normal text-base text-black no-underline">
                      / khách
                    </span>
                  </p>
                </div>
              </div>
              <Button
                onClick={() => navigate(`/tour/${id}`)}
                variant="contained"
              >
                Đặt ngay
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
