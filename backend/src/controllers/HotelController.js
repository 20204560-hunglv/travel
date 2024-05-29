const HotelRepository = require("../repositories/HotelRepository");

async function get(req, res) {
  try {
    const response = await HotelRepository.get();
    return res.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
async function create(req, res) {
  try {
    const data = req.body;
    await HotelRepository.create(data);
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await HotelRepository.update({ id, data });
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await HotelRepository.remove(id);
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { get, create, update, remove };
