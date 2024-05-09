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
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Grid from "@mui/material/Unstable_Grid2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { truncateString } from "../../utils/shortenString";

const Choose = (props) => {
  return (
    <div className="font-semibold text-sm mb-4">
      <p>{props.label}</p>
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

  const convertDay = (day) => {
    return dayjs(day).format("DD/MM/YYYY");
  };

  return (
    <Card className="h-96 flex flex-col">
      <div>
        <CardMedia
          component="img"
          sx={{
            height: 200,
          }}
          image={item.main_image_url}
          alt={item.main_image_url}
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div onClick={handleToBooking} className="cursor-pointer">
          <CardContent>
            <Typography variant="h6" component="div">
              {truncateString(item.name)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {convertDay(item.start_time)}
            </Typography>
          </CardContent>
        </div>
        <CardActions className="flex justify-between">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography className="text-red-500" variant="h6" component="p">
            {currencyVnd(item.prices)}
          </Typography>
        </CardActions>
      </div>
    </Card>
  );
};

const Search = () => {
  let location = useLocation().state;

  const [data, setData] = useState([]);
  const [countryFrom, setCountryFrom] = useState(location.from || "");
  const [countryTo, setCountryTo] = useState(location.to || "");
  const [numberDate, setNumberDate] = useState(location.period || "");
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
  const handleDate = (date) => {
    setValue(date);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    getTours()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const compareItem = (item) => {
    return (
      (countryFrom ? countryFrom === item.addressFrom : true) &&
      (countryTo ? countryTo === item.addressTo : true) &&
      (date ? dayjs(item.start_time).isSame(date, "day") : true) &&
      (numberDate ? numberDate === item.period : true)
    );
  };

  return (
    <DefaultLayout>
      <div className="flex min-h-630 m-auto w-11/12 py-10">
        <div className="bg-gray-100 w-1/4 pt-12 h-fit">
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
                  onChange={(newValue) => handleDate(newValue)}
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
                inputProps={{
                  min: 0,
                }}
                value={numberDate}
                onChange={handlePeriod}
                className="w-full"
              />
            </div>
            <div className="text-center mt-6 cursor-pointer mb-6">
              <Button variant="contained">Tìm kiếm</Button>
            </div>
          </div>
        </div>
        <div className="w-3/4 py-5 px-3">
          <Typography align="center" variant="h4" component="h4">
            Kết quả tìm kiếm
          </Typography>
          <Box sx={{ flexGrow: 1, my: 4 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 3 }}
            >
              {data
                .filter((item) => {
                  return compareItem(item);
                })
                .map((item, index) => (
                  <Grid xs={2} sm={4} md={1} key={index}>
                    <SearchItem item={item} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Search;
