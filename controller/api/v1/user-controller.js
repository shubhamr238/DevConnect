const User = require("../../../models/User");
const gravatar = require("gravatar");

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

    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
