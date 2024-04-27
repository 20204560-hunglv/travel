import { useLocation } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import citys from "../../utils/citys";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import currencyVnd from "../../utils/curencyVnd";
import { get as getTours } from "../../Services/SearchServices";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";
import dayjs from "dayjs";

const Choose = (props) => {
  return (
    <div className="font-semibold text-sm mb-4">
      <h5>{props.label}</h5>
      <Select className="w-full" value={props.value} onChange={props.onChange}>
        {citys.map((city, index) => (
          <MenuItem key={index} value={city.value}>
            {city.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
const SearchItem = ({ item }) => {
  const navigate = useNavigate();
  const handleToBooking = () => {
    navigate(`/tour/${item._id}`);
  };
  return (
    <div
      onClick={handleToBooking}
      className="rounded-lg cursor-pointer my-4 w-1/4 mx-4-1-percen transition-shadow hover:shadow-lg hover:shadow-slate-700"
    >
      <img src={item.main_image_url} className="h-44 w-full" alt="abc"></img>
      <div className="text-blue-900 pt-1 pr-2 pb-2">
        <p className="text-xs">{item.start_time}</p>
        <p className="font-bold">{item.name}</p>
        <p className="text-red-500 font-semibold float-right mt-3">
          {currencyVnd(item.prices)}
        </p>
      </div>
      <div></div>
    </div>
  );
};
const Search = () => {
  let location = useLocation().state;

  const [data, setData] = useState([]);
  const [countryFrom, setCountryFrom] = useState(location.from || "");
  const [countryTo, setCountryTo] = useState(location.to || "");
  const [numberDate, setNumberDate] = useState(location.period);
  const [date, setValue] = useState(
    location.start ? dayjs(location.start) : null
  );

  const handleFrom = (event) => {
    setCountryFrom(event.target.value);
  };
  const handleTo = (event) => {
    setCountryTo(event.target.value);
  };
  const handlePeriod = (event) => {
    setNumberDate(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    getTours()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <DefaultLayout>
      <div className="flex min-h-630 m-auto w-11/12">
        <div className="bg-gray-100 w-1/4 pt-12">
          <div className="w-4/5 mx-auto">
            <p className={`font-bold text-xl mb-6 text-center`}>Lọc kết quả</p>
            <Choose label="ĐIỂM ĐI" value={countryFrom} onChange={handleFrom} />
            <Choose label="ĐIỂM ĐẾN" value={countryTo} onChange={handleTo} />
            <div className="font-semibold w-full text-sm">
              <h5 className="">NGÀY ĐI</h5>
              <div className="w-full">
                <DatePicker
                  className="w-full"
                  value={date}
                  onChange={(newValue) => setValue(newValue)}
                />
              </div>
            </div>
            <div className="font-semibold text-sm w-full mt-4">
              <h5 className="min-w-fit">SỐ NGÀY</h5>
              <TextField
                id="period-number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={numberDate}
                onChange={handlePeriod}
                className="w-full"
              />
            </div>
            <div className="text-center mt-6 cursor-pointer">
              <Button variant="contained">Tìm kiếm</Button>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="w-full mb-5 mt-5">
            <div className="mt-5 flex justify-between flex-wrap w-full">
              {data
                .filter((item) => {
                  return (
                    (countryFrom ? countryFrom === item.addressFrom : true) &&
                    (countryTo ? countryTo === item.addressTo : true) &&
                    (date ? date === item.start_time : true) &&
                    (numberDate ? numberDate === item.period : true)
                  );
                })
                .map((item, index) => (
                  <SearchItem key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Search;
