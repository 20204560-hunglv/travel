const User = require("../models/users");

const userOrderTour = async (req, res) => {
  const id = req.params.id;
  const tours = req.body;
  try {
    const userUpdate = await User.findOneAndUpdate(
      { _id: id },
      { $push: { tours } },
      { new: true }
    ).sort();
    return res.status(200).json({
      message: "order tour ok",
      userUpdate,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "error",
    });
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

const userGetOrderTour = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id });
    return res.status(200).json(user.tours);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id });
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const userUpdateOrderTour = async (req, res) => {
  const id = req.params.id;
  const dataUpdate = req.body;
  try {
    await User.updateOne(
      { _id: id },
      {
        tours: dataUpdate,
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

const updateUser = async (req, res) => {
  const id = req.params.id;
  const request = req.body;


  try {
    await User.updateOne({ _id: id }, { ...request });
    
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal ServerError");
  }
};

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
  const id = req.params.id;
  const { pass, newPass } = req.body;
  try {
    const isPass = await User.findOne({ _id: id, password: pass });
    // const isPass = await User.findOne({ username: username, password: pass });
    if (!isPass) return res.status(409).json({ error: "Password wrong" });
    await User.updateOne({ _id: id }, { password: newPass });
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
  const id = req.params.id;
  try {
    const respUser = await User.deleteOne({ _id: id });
    return res.status(200).json({
      message: "delete ok",
      data: respUser,
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

module.exports = {
  deleteTour,
  signUp,
  login,
  getUser,
  updateUser,
  updatePassword,
  getAllUsers,
  deleteUser,
  updateUserByAdmin,
  userOrderTour,
  userGetOrderTour,
  userUpdateOrderTour,
};
