const {
  getGuides,
  createGuide,
  updateGuide,
  removeGuide,
} = require("../repositories/GuideRepository");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Promise<>}
 */
const get = async (req, res) => {
  try {
    const resp = await getGuides();
    return res.json({ success: true, data: resp });
  } catch (error) {
    return res.status(404).json({ success: false });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
const create = async (req, res) => {
  try {
    const reqData = req.body;
    await createGuide(reqData);

    return res.stats(201).json({ success: true });
  } catch (error) {
    return res.status(404).json({ success: false });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
const update = async (req, res) => {
  try {
    const { id, dataUpdate } = req.body;
    await updateGuide({ id, dataUpdate });

    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
};

const deleteGuide = async (req, res) => {
  try {
    const { id } = req.params;
    await removeGuide(id);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
};

module.exports = { get, create, update, deleteGuide };
