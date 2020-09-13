const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// There are many Body Parser Modes ....
//We are using - special - one that is used for form data - passing
// parse the request body

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   res.send("Thanks for posting that !");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of calculation is " + result);
});

app.listen(3000, function () {
  console.log("Server is running on Port 3000");
});
