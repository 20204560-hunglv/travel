const UserRouter = require("../routes/CustomerRouter");
const TourRouter = require("../routes/TourRouter");
const AdminRouter = require("../routes/AdminRouter");
const GuideRouter = require("../routes/GuideRouter");
const HotelRouter = require("../routes/HotelRouter");
const DiscountRouter = require("../routes/DiscountRouter");
const OrderRouter = require("../routes/OrderRouter");
const AuthRouter = require("../routes/AuthRouter");
const FavoriteRouter = require("../routes/FavoriteRouter");

const routes = (app) => {
  app.use("/api/v1", UserRouter);
  app.use("/api/v1", TourRouter);
  app.use("/api/v1", AdminRouter);
  app.use("/api/v1", GuideRouter);
  app.use("/api/v1", HotelRouter);
  app.use("/api/v1", DiscountRouter);
  app.use("/api/v1", OrderRouter);
  app.use("/api/v1", AuthRouter);
  app.use("/api/v1", FavoriteRouter);
};
module.exports = routes;
