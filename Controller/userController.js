const userSchema = require("../Models/userModel");

const getData = async (req, res) => {
  try {
    const users = await userSchema.find();

    res.status(200).json({
      message: "Get all user",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createData = async (req, res) => {
  try {
    const savedUser = await userSchema.create(req.body);
    res.status(200).json({
      message: "Create User",
      data: savedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteuser = await userSchema.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete User",
      data: deleteuser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const userId = await userSchema.findById(id);
    res.status(200).json({
      message: "Get user by ID",
      data: userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error occur" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;

    const response = await userSchema.findByIdAndUpdate(id, updatedUser, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User Updated",
      data: response,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getData,
  createData,
  deleteUser,
  getUserById,
  updateUser,
};
