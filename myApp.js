require('dotenv').config();
let express = require('express');
let app = express();

app.use(function(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next()
});

app.use(express.static(__dirname + "/public"));
// Normal usage
app.use("/public", express.static(__dirname + "/public"));
// Assets at the /public route
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});

// console.log("Hello World");

module.exports = app;
