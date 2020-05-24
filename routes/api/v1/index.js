const express = require("express");
const router = express.Router();

// Handling v1 routes
router.use("/users", require("./users"));
router.use("/profile", require("./profile"));
router.use("/posts", require("./posts"));
module.exports = router;
