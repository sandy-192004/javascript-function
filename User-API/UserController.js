const User = require("./UserModels.js");  

// create new user
const getNewUsers = async (req, res) => {
  try {
    const newUser = new User({   
      Name: req.body.Name,
      Age: req.body.Age,
      email: req.body.email,
    });

    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

// get user by name
const getUserByName = async (req, res) => {
  try {
    const foundUser = await User.findOne({ Name: req.params.Name  });
    return res.status(200).json(foundUser);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = { getAllUsers,getUserByName, getNewUsers };
