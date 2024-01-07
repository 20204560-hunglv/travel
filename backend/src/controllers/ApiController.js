const Tour = require("../models/tour");
const User = require("../models/users");
const AdminSchema = require("../models/admins");

const createTour = async (req, res) => {
  const { name, start_time, period, main_image_url, prices } = req.body;
  const newTour = {
    name: name,
    start_time: start_time,
    period: period,
    main_image_url: main_image_url,
    prices: prices,
  };

  if (!name || !start_time || !period || !main_image_url || !prices) {
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
const orderTour = async (req, res) => {
  const username = req.params.username;
  const tours = req.body;
  try {
    const userUpdate = await User.findOneAndUpdate(
      { username: username },
      { $push: { tours } },
      { new: true },
    ).sort();
    return res.status(200).json({
      message: "order tour ok",
      userUpdate
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "error",
    });
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
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const getOrderTour = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await User.findOne({username: username});
    return res.status(200).json(user.tours);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const getUser = async (req, res) => {
  const username = req.params.username;
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  try {
    const user = await User.findOne({ username: username });
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const getTour = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.status(400).json({ error: "_id is required" });
  }
  try {
    const tour = await Tour.findOne({ _id: _id });
    return res.status(200).json(tour);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const updateOrderTour = async (req, res) => {
  const username = req.params.username;
  const dataUpdate = req.body;
  if (!username) {
    return res.status(400).json({ error: "_id is required" });
  }
  try {
    await User.updateOne(
      { username: username },
      {
        tours: dataUpdate
      }
    );
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
const updateTour = async (req, res) => {
  const { _id } = req.body;
  const { name, start_time, period, main_image_url, prices } = req.body;
  try {
    await Tour.updateOne(
      { _id: _id },
      {
        name: name,
        start_time: start_time,
        period: period,
        main_image_url: main_image_url,
        prices: prices,
      }
    );
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
// const updateUser = async (req, res) => {
//   const username = req.params.username;
//   const { fullName, email, address, gender } = req.body;
//   try {
//     await User.updateOne(
//       { username: username },
//       { fullname: fullName, email: email, address: address, gender: gender }
//     );
//     return res.status(200).json({
//       message: "update ok",
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Internal ServerError");
//   }
// };
const updateUserByAdmin = async (req, res) => {
  const { userName, passWord, fullName, email, address, gender } = req.body;
  try {
    const userFind = await User.findOne({
      username: userName,
    });
    if (userFind) {
      await User.updateOne(
        { username: userName },
        {
          password: passWord,
          fullname: fullName,
          email: email,
          address: address,
          gender: gender,
        }
      );
      return res.status(200).json({
        message: "update ok",
      });
    } else {
      const user = new User({
        username: userName,
        password: passWord,
        fullname: fullName,
        email: email,
        address: address,
        gender: gender,
      });
      await user.save();
      return res.status(200).json({
        message: "create ok",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
const updatePassword = async (req, res) => {
  const username = req.params.username;
  const { pass, newPass } = req.body;
  try {
    const isPass = await User.findOne({ username: username, password: pass });
    if (!isPass) return res.status(409).json({ error: "Password wrong" });
    await User.updateOne({ username: username }, { password: newPass });
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
const deleteTour = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.status(400).json({ error: "_id is required" });
  }
  try {
    await Tour.deleteOne({ _id: _id });
    return res.status(200).json({
      message: "delete ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};
const deleteUser = async (req, res) => {
  const username = req.params.username;
  try {
    await User.deleteOne({ username: username });
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
    return res
      .status(400)
      .json({ error: "Username and password are required" });
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
    return res
      .status(400)
      .json({ error: "Username and password are required" });
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
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  try {
    const user = await AdminSchema.findOne({
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
  getUser,
  // updateUser,
  updatePassword,
  loginAdmin,
  getAllUsers,
  deleteUser,
  updateUserByAdmin,
  getTour,
  orderTour,
  getOrderTour,
  updateOrderTour
};
