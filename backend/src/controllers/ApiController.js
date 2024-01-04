const Tour = require("../models/tour");
const User = require("../models/users");

const createTour = async (req, res) => {
  const { name, start_time, period, main_image_url, code, status } = req.body;
  const newTour = {
    name: name,
    start_time: start_time,
    period: period,
    main_image_url: main_image_url,
    code: code,
    status: status,
  };

  if (!name || !start_time || !period || !main_image_url || !code || !status) {
    return res.status(200).json({
      message: "invaild",
    });
  } else {
    try {
      await Tour.create(newTour);
      return res.status(200).json({
        message: "ok",
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        message: "error",
      });
    }
  }
};
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    return res.status(200).json(tours);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const getUser = async (req, res) => {
  const username = req.params.username
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  try {
    const user = await User.findOne({username: username});
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const updateTour = async (req, res) => {
  const { code, newDate } = req.body;
  try {
    await Tour.updateOne({ code: code }, { start_time: newDate });
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
const deleteTour = async (req, res) => {
  const { code } = req.body;
  try {
    await Tour.deleteOne({ code: code });
    return res.status(200).json({
      message: "delete ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
const signUp = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  try {
    const findUser = await User.findOne({ username: username });
    if (findUser) {
      return res.status(409).json({ error: "Username already in use" });
    } else {
      const newUser = { username, password };
      await User.create(newUser);
      return res
        .status(201)
        .json({ message: "Registration successful", user: newUser });
    }
  } catch (error) {
    return res.status(401).json({ error: error });
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });
    if (user) {
      return res.status(200).json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ error: "Account not found" });
    }
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
module.exports = {
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
  signUp,
  login,
  getUser
};