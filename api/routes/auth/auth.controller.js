const User = require("../../models/user/user");

const httpRegisterUser = async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { httpRegisterUser };
