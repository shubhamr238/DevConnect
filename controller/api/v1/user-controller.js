const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const User = require("../../../models/User");
const Keys = require("../../../config/keys");

module.exports.registerUser = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ msg: "Eamil Already Exists!" });
    }

    const gravatar_url = await gravatar.url(req.body.email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: gravatar_url,
    });

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;

    //Find the user
    var foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ msg: "User Not Found!" });
    }
    const isMatch = await foundUser.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect Username or Password!" });
    }

    const jwtPayload = {
      id: foundUser._id,
      name: foundUser.name,
      avatar: foundUser.avatar,
    };
    let token = await jwt.sign(jwtPayload, Keys.secretOrKey, {
      expiresIn: 360000,
    });
    return res.status(200).json({ token: "Bearer " + token, msg: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
