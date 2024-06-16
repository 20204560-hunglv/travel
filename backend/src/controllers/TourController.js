const Tour = require("../models/tour");
const TourRepository = require("../repositories/TourRepository");

const deleteTour = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.status(400).json({ error: "_id is required" });
  }
  try {
    await Tour.deleteOne({ _id: _id });
    return res.status(200).json({
      message: "delete ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};

const getAllTours = async (req, res) => {
  try {
    const query = req.query;
    const [tours, totalPage] = await Promise.all([
      TourRepository.get({ ...query }),
      TourRepository.getTotalPage({})
    ]);
    return res.status(200).json({tours, totalPage});
  } catch (err) {
    console.error(err);
    return res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

const getTour = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.status(400).json({ error: "_id is required" });
  }
  try {
    const tour = await Tour.findOne({ _id: _id });
    return res.status(200).json(tour);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const searchTour = async (req, res) => {
  const { from, to, start, period } = req.body;

  // Xây dựng các điều kiện tìm kiếm dựa trên từng trường
  const conditions = {};
  if (from) conditions.addressFrom = { $regex: from, $options: "i" };
  if (to) conditions.addressTo = { $regex: to, $options: "i" };
  if (start) conditions.start_time = { $regex: start, $options: "i" };
  if (period) conditions.period = { $regex: period, $options: "i" };
  try {
    const tours = await Tour.find(conditions).sort({ updatedAt: -1 });
    return res.status(200).json(tours);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const updateTour = async (req, res) => {
  const _id = req.params.id;
  const dataUpdate = req.body;
  try {
    await Tour.updateOne(
      { _id: _id },
      dataUpdate
    );
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};

const createTour = async (req, res) => {
  try {
    const data = req.body;
    await Tour.create(data);
    return res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "error",
    });
  }
};

module.exports = {
  getAllTours,
  getTour,
  searchTour,
  updateTour,
  deleteTour,
  createTour,
};
