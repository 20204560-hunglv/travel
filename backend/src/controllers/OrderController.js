const OrderRepository = require("../repositories/OrderRepository");
const {
  updateIncrement,
  getTourById,
} = require("../repositories/TourRepository");

const get = async (req, res) => {
  try {
    const response = await OrderRepository.get();
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const getByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await OrderRepository.getByUserId(userId);
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const { tourId } = data;
    await Promise.all([
      OrderRepository.create(data),
      updateIncrement({ field: "slotStill", tourId, value: -1 }),
    ]);
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = await OrderRepository.getById(_id);
    const tour = await getTourById(order.tourId);
    console.log({ order });
    const promises = [OrderRepository.remove(_id)];
    if (order.status !== "Cancelled") {
      promises.push(
        updateIncrement({ field: "slotStill", tourId: tour._id, value: 1 })
      );
    }

    await Promise.all(promises);
    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const edit = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = req.body;
    await OrderRepository.edit({ _id, data });
    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { get, create, remove, edit, getByUserId };
