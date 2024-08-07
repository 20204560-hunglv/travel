const Tour = require("../models/tour");

const get = async ({
  limit = 12,
  field = "createdAt",
  sort = "desc",
  page = 1,
  getAll = false,
  find = {}
}) => {
  if (getAll) return Tour.find(find).sort({ [field]: sort });
  else
    return Tour.find({})
      .sort({ [field]: sort })
      .skip((page - 1) * limit)
      .limit(limit * 1);
};

const getTotalPage = async ({
  field = "createdAt",
  limit = 12,
  sort = "desc",
}) => {
  const tours = await Tour.find({}).sort({ [field]: sort });
  return Math.ceil(tours.length / limit);
};

const updateFavorite = async (tourId, value) => {
  await Tour.findByIdAndUpdate(
    tourId,
    { $inc: { favorites: value } },
    { new: true }
  );
};

/**
 *
 * @param {String} field
 * @param {String} tourId
 * @param {Number} value
 */
const updateIncrement = async ({ field, tourId, value }) => {
  console.log(`updateIncrement`, { field }, { tourId }, { value });
  await Tour.findByIdAndUpdate(
    tourId,
    { $inc: { [field]: value } },
    { new: true }
  );
};

const getTourById = async (_id) => {
  return await Tour.findOne({ _id });
};

module.exports = {
  get,
  getTotalPage,
  updateFavorite,
  updateIncrement,
  getTourById,
};
