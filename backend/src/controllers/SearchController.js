const Tour = require("../models/tour");
const User = require("../models/users");
class SearchController {
  async index(req, res) {
    try {
      const tours = await User.find({});
      res.json(tours);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
    // res.render("search");
  }
  async slug(req, res) {
    const newUser = {
      username: "username 1",
      password: "password 1",
      phone_number: "phone_number 1",
      create_date: "create_date 1",
      email: "hourly",
      id: "1",
    };
    try {
      await User.create(newUser);
      res.send("Success !!!");
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new SearchController();
