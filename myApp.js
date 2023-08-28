let express = require('express');
let app = express();
app.get("/", function(req, res) {
  res.sendFi(__dirname + '/views/index.html');
});
console.log("Hello World");




































 module.exports = app;
