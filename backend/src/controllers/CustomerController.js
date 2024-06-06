const Customer = require("../models/customers");
const CustomerRepository = require("../repositories/CustomerRepository");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const username = userData.username;

    const findUser = await CustomerRepository.findUser({ username });
    if (findUser) {
      throw new Error("Tên tài khoản đã tồi tại");
    }

    await CustomerRepository.createUser(userData);

    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const userOrderTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tours = req.body;
    const userUpdate = await CustomerRepository.findOrderTour({ id, tours });
    return res.status(200).json({
      success: true,
      userUpdate,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await CustomerRepository.get();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const userGetOrderTour = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await CustomerRepository.findOrder(id);
    return res.status(200).json(customer.tours);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await CustomerRepository.findUser({ _id: id });
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
    await CustomerRepository.updateOrder({ id, dataUpdate });
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
    await CustomerRepository.updateUser({ id, request });

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
    const userFind = await Customer.findOne({
      username: userName,
    });
    if (userFind) {
      await Customer.updateOne(
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
      const user = new Customer({
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
    return res.status(404).json({
      success: false,
    });
  }
};

const updatePassword = async (req, res) => {
  const id = req.params.id;
  const { pass, newPass } = req.body;
  try {
    const isPass = await Customer.findOne({ _id: id, password: pass });
    if (!isPass) return res.status(409).json({ error: "Password wrong" });
    await Customer.updateOne({ _id: id }, { password: newPass });
    return res.status(200).json({
      message: "update ok",
    });
  } catch (err) {
    console.error(err);
    return res.status(404).json({
      success: false,
    });
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
    const respUser = await Customer.deleteOne({ _id: id });
    return res.status(200).json({
      message: "delete ok",
      data: respUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(404).json({
      success: false,
    });
  }
};

const signUp = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username hoặc password bị thiếu" });
  }
  try {
    const findUser = await Customer.findOne({ username: username });
    if (findUser) {
      return res.status(409).json({ error: "Tên đăng nhập đã tồn tại" });
    } else {
      const newUser = { username, password };
      await Customer.create(newUser);
      return res
        .status(201)
        .json({ message: "Đăng ký thành công", user: newUser });
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
    const user = await Customer.findOne({
      username: username,
      password: password,
    });
    if (user) {
      return res.status(200).json({ message: "Login successful", user });
    } else {
      return res
        .status(401)
        .json({ error: "Tên đăng nhập hoặc mật khẩu không đúng" });
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
  createUser,
};
