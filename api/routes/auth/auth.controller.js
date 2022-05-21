const User = require("../../models/user/user");
const bcrypt = require("bcrypt");

const httpRegisterUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const httpSignInUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send("User not found");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).json("Wrong Password");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { httpRegisterUser, httpSignInUser };
