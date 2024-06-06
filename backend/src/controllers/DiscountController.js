const DiscountRepository = require('../repositories/DiscountRepository')

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

module.exports = {get}
