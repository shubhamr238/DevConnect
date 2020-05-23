const express = require("express");
const router = express.Router();

// Handling v1 routes
router.use("/users", require("./users"));

module.exports = router;
