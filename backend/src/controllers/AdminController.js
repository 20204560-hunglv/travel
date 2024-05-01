const AdminSchema = require("../models/admins");

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
    loginAdmin,
}

