const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../../../controller/api/v1/user-controller");

//@route  POST api/v1/users/register
//@desc   Register User
//@access Public
router.post("/register", userController.registerUser);

//@route  POST api/v1/users/login
//@desc   Login a User(Return JWT Token)
//@access Public
router.post("/login", userController.loginUser);

router.get(
  "/valid",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    console.log("Yo!");
    return res.json({ msg: "success...." });
  }
);
module.exports = router;
