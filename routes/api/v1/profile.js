const express = require("express");
const router = express.Router();
const passport = require("passport");
const profileController = require("../../../controller/api/v1/profile-controller");

//@route  GET api/v1/users/profile
//@desc   fetch current user profile info
//@access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.fetchProfile
);

//@route  POST api/v1/users/profile
//@desc   fetch current user profile info
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.createProfile
);

// @route   GET api/v1/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", profileController.returnAllProfile);

// @route   GET api/v1/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get("/handle/:handle", profileController.getProfileByHandle);

// @route   GET api/v1/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get("/user/:user_id", profileController.getProfileByUserId);

// @route   POST api/v1/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  profileController.addExprience
);

// @route   POST api/v1/profile/education
// @desc    Add education to profile
// @access  Private
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  profileController.addEducation
);

// @route   DELETE api/v1/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  profileController.deleteExprience
);

// @route   DELETE api/v1/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
  "/education/:edu_id",
  passport.authenticate("jwt", { session: false }),
  profileController.deleteEducation
);

// @route   DELETE api/v1/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  profileController.deleteUserAndProfile
);

module.exports = router;
