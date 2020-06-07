const express = require("express");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");
const app = express();
const db = require("./config/mongoose");
const path = require("path");
const port = process.env.PORT || 8000;

// body parser for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use passport
app.use(passport.initialize());
app.use(passport.session());

// use express router
app.use("/", require("./routes"));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Server Listner
app.listen(port, function (err) {
  if (err) {
    console.log("Error Running the Server", err);
  }
  console.log("Server Running on Port: ", port);
});
