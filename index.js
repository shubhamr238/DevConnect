const express = require("express");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");
const app = express();
const db = require("./config/mongoose");
const port = process.env.PORT || 8000;

// body parser for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use passport
app.use(passport.initialize());
app.use(passport.session());

// use express router
app.use("/", require("./routes"));

//Server Listner
app.listen(port, function (err) {
  if (err) {
    console.log("Error Running the Server", err);
  }
  console.log("Server Running on Port: ", port);
});
