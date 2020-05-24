const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const User = require("../../../models/User");
const Keys = require("../../../config/keys");

// Load Input Validation
const validateRegisterInput = require("../../../validation/register");
const validateLoginInput = require("../../../validation/login");

//Register User (/api/v1/register)
module.exports.registerUser = async function (req, res) {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
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

//Login a User by providing JWT Token (/api/v1/login)
module.exports.loginUser = async function (req, res) {
  try {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let email = req.body.email;
    let password = req.body.password;

    //Find the user
    var foundUser = await User.findOne({ email });
    if (!foundUser) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    const isMatch = await foundUser.matchPassword(password);
    if (!isMatch) {
      errors.password = "Password incorrect";
      return res.status(400).json(errors);
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
