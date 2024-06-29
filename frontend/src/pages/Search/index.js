import { useLocation, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import cites from "../../utils/cites";
import { useEffect, useState } from "react";
import { get as getTours } from "../../services/SearchServices";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import {
  Box,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Grid from "@mui/material/Unstable_Grid2";
import ItemTour from './../../components/Card/ItemTour';

const Choose = (props) => {
  return (
    <div className="font-semibold text-sm mb-4">
      <p>{props.label}</p>
      <Select className="w-full" value={props.value} onChange={props.onChange}>
        <MenuItem value="">--</MenuItem>
        {cites.map((city, index) => (
          <MenuItem key={index} value={city.value}>
            {city.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

const Search = () => {
  const params = useParams();
  let location = useLocation().state;
  const navigate = useNavigate();
  const [page, setPage] = useState(params.page * 1 || 1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [countryFrom, setCountryFrom] = useState(location?.from || "");
  const [countryTo, setCountryTo] = useState(location?.to || "");
  const [numberDate, setNumberDate] = useState(location?.period || "");
  const [date, setDate] = useState(
    location?.start ? dayjs(location.start) : null
  );
  const [adultPrice, setAdultPrice] = useState("");
  const [sort, setSort] = useState("");

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
    setDate(date);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    try {
      const tours = await getTours(page);
      setData(tours.data.tours);
      setDataSearch(tours.data.tours);
      setTotalPage(tours.data.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  const compareItem = (item) => {
    return (
      (countryFrom ? countryFrom === item.addressFrom : true) &&
      (countryTo ? countryTo === item.addressTo : true) &&
      (date ? dayjs(item.start_time).isSame(date, "day") : true) &&
      (numberDate ? numberDate === item.period : true) &&
      (adultPrice ? adultPrice >= item.adultPrice : true)
    );
  };

  const handleSearch = () => {
    const search = data.filter((item) => {
      return compareItem(item);
    });
    setTotalPage(parseInt(search.length / 6) + 1);
    setDataSearch(search);
  };
  const handleSort = (value) => {
    console.log(value);
    setSort(value);
    if (value === "") dataSearch.sort((a, b) => b.adultPrice - a.adultPrice);
    if (value === "price-asc")
      dataSearch.sort((a, b) => a.adultPrice - b.adultPrice);
    if (value === "price-desc")
      dataSearch.sort((a, b) => b.adultPrice - a.adultPrice);
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
            <div className="font-semibold text-sm w-full mt-4">
              <div className="flex items-center justify-between">
                <h5 className="min-w-fit">Giá</h5>
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: 0,
                  }}
                  sx={{
                    width: "50%",
                  }}
                  size="small"
                  value={adultPrice}
                  onChange={(event) => setAdultPrice(event.target.value)}
                >
                  Hello
                </TextField>
              </div>
              <Slider
                value={adultPrice}
                onChange={(event) => setAdultPrice(event.target.value)}
                max={50000000}
                step={1000}
              />
            </div>
            <div className="text-center mt-6 cursor-pointer mb-6">
              <Button onClick={() => handleSearch()} variant="contained">
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
        <div className="w-3/4 py-5 px-3">
          <div>
            <Typography align="center" variant="h4" component="h4">
              Kết quả tìm kiếm
            </Typography>
          </div>
          <div className="flex items-center justify-end space-x-5">
            <InputLabel id="sort-search">Sắp xếp theo</InputLabel>
            <Select
              sx={{
                width: "170px",
              }}
              labelId="sort-search"
              size="small"
              value={sort}
              onChange={(event) => handleSort(event.target.value)}
            >
              <MenuItem value="">-- Chọn --</MenuItem>
              <MenuItem value="price-desc">Giá Cao - Thấp</MenuItem>
              <MenuItem value="price-asc">Giá Thấp - Cao</MenuItem>
            </Select>
          </div>
          <Box sx={{ flexGrow: 1, my: 4 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 3 }}
            >
              {dataSearch.map((item, index) => (
                <Grid xs={2} sm={4} md={1} key={index}>
                  <ItemTour item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <div className="flex justify-center">
            <Pagination
              count={totalPage}
              color="primary"
              page={page}
              onChange={(event, value) => {
                setPage(value);
                navigate(`/search/page/${value}`);
              }}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Search;
