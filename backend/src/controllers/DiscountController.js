const DiscountRepository = require("../repositories/DiscountRepository");

const get = async (req, res) => {
  try {
    const response = await DiscountRepository.get();
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
    await DiscountRepository.create(data);
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
    await DiscountRepository.remove(_id);
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
    await DiscountRepository.edit({ _id, data });
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

module.exports = { get, create, remove, edit };
