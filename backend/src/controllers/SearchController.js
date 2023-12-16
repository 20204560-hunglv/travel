const Tour = require("../models/tour");
class SearchController {
  async index(req, res) {
    try {
      const tours = await Tour.find({});
      res.json(tours);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
    // res.render("search");
  }
  slug(req, res) {
    res.send("Slug");
  }
}
module.exports = new SearchController();
