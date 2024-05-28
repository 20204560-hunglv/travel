const Guide = require("../models/guides");

/**
 *
 * @returns {Promise}
 */
const getGuides = async () => {
  return await Guide.find();
};

/**
 * 
 * @param {*} data 
 * @returns {Promise}
 */
const createGuide = async (data) => {
  await Guide.create(data);
};

/**
 * 
 * @param {*} id
 * @param {object} dataUpdate
 * @return {Promise}
 */
const updateGuide = async ({id, dataUpdate}) => {
  await Guide.updateOne({_id: id}, dataUpdate)
}

const removeGuide = async (id) => {
  await Guide.deleteOne({_id: id})
}

module.exports = { getGuides, createGuide, updateGuide, removeGuide };
