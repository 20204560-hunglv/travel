const Tour = require("../models/tour");

const get = async ({
  limit = 6,
  field = "createdAt",
  sort = "desc",
  page = 1,
}) => {
  return await Tour.find({})
    .sort({ [field]: sort })
    .skip((page - 1) * limit)
    .limit(limit * 1);
};

const getTotalPage = async ({
  field = "createdAt",
  limit = 6,
  sort = "desc",
}) => {
  const tours = await Tour.find({}).sort({ [field]: sort });
  return parseInt(tours.length / limit) + 1;
};

module.exports = { get, getTotalPage };