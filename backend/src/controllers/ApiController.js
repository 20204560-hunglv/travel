const Tour = require("../models/tour");

const createTour = async (req, res) => {
  const { name, start_time, period, main_image_url, code, status } = req.body;
  const newTour = {
    name: name,
    start_time: start_time,
    period: period,
    main_image_url: main_image_url,
    code: code,
    status: status,
  };

  if (!name || !start_time || !period || !main_image_url || !code || !status) {
    return res.status(200).json({
      message: "invaild",
    });
  } else {
    try {
      await Tour.create(newTour);
      return res.status(200).json({
        message: "ok",
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        message: "error",
      });
    }
  }
};
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    return res.status(200).json(tours);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const updateTour = async (req, res) => {
  const { code, newDate } = req.body;
  try {
    await Tour.updateOne({ code: code }, { start_time: newDate });
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
const deleteTour = async (req, res) => {
    const { code } = req.body;
    try {
      await Tour.deleteOne({ code: code });
      return res.status(200).json({
        message: "delete ok",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal ServerError");
    }
  };
module.exports = {
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
};
