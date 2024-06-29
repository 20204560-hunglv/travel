const FavoriteRepository = require("../repositories/FavoriteRepository");
const { updateFavorite } = require("../repositories/TourRepository");

const getAmount = async (req, res) => {
  try {
    const response = await FavoriteRepository.getAll();
    return res.json({
      success: true,
      data: response.length,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};
const get = async (req, res) => {
  try {
    const query = req.query;
    const resp = await FavoriteRepository.getOne(query);
    return res.status(200).json({
      success: true,
      data: resp,
    });
  } catch (err) {
    console.error(err);
    return res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};
const create = async (req, res) => {
  try {
    const data = req.body;
    const { tourId } = data;
    await Promise.all([
      FavoriteRepository.create(data),
      updateFavorite(tourId, 1),
    ]);
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await FavoriteRepository.getOne({_id: id});
    const tourId = resp.tourId;
    await Promise.all([
        FavoriteRepository.remove(id),
        updateFavorite(tourId, -1),
      ]);
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

module.exports = { getAmount, get, create, remove };
