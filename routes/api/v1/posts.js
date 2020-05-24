const express = require("express");
const router = express.Router();
const passport = require("passport");
const postController = require("../../../controller/api/v1/posts-controller");

// @route   GET api/v1/posts
// @desc    Get posts
// @access  Public
router.get("/", postController.fetchAllPosts);

// @route   GET api/v1/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", postController.getPostById);

//@route  POST api/v1/users/profile
//@desc   Create Post
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.createPost
);

// @route   DELETE api/v1/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  postController.deletePost
);

// @route   POST api/v1/posts/like/:id
// @desc    Like post
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  postController.likePost
);

// @route   POST api/v1/posts/unlike/:id
// @desc    Unlike post
// @access  Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  postController.unlikePost
);

// @route   POST api/v1/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  postController.addCommentToPost
);

// @route   DELETE api/v1/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  postController.removeCommentFromPost
);

module.exports = router;
