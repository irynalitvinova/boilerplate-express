require('dotenv').config();
let express = require('express');
let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
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

app.get("/now", function (req, res, next) {
  req.time = new Date().toString();
  next();
},
  function (req, res) {
    res.send({
      time: req.time
    });
  }
);

app.get("/:word/echo", function (req, res) {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
app.get("/name", function (req, res) {
  let { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.post("/name", function(req, res) {
  // Handle the data in the request
  let string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

// console.log("Hello World");

module.exports = app;
