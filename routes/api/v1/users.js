const express = require("express");
const router = express.Router();

const userController = require("../../../controller/api/v1/user-controller");

// Handling v1 routes
router.get("/", function (req, res) {
  return res.json({ msg: "User" });
});

//@route  GET api/v1/users/register
//@desc   Register User
//@access Public
router.post("/register", userController.registerUser);
module.exports = router;
