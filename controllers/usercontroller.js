const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // get all users from DB
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//create a user
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body); // create user from request body
    const savedUser = await newUser.save(); // save to DB
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update user 
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated user
    );

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
