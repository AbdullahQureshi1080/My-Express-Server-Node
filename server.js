const { response } = require("express");
//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me on my email");
});

app.get("/about", function (req, res) {
  res.send(
    "I am a designer having passion for web and mobile design with focus on UI and UX"
  );
});

app.get("/info", function (req, res) {
  res.send("I am the best");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
