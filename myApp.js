let express = require('express');
let app = express();
app.use(express.static(__dirname + "/public"));
// Normal usage
app.use("/public", express.static(__dirname + "/public"));
// Assets at the /public route
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
console.log("Hello World");



 module.exports = app;
