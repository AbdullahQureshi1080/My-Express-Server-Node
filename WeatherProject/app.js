const express = require("express");
const dotenv = require("dotenv").config();
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// Get Data from external server and parse it using JSON parse and logging it into the console.

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const cityName = req.body.cityName;
  const query = cityName;
  const API_KEY = process.env.API_KEY;
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${units}`;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const weatherTemp = weatherData.main.temp;
      const weatherdescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const imageUrl =
        "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
      //   console.log(desc);
      res.write(
        "<h1>The temp in" +
          " " +
          cityName +
          " " +
          "is" +
          " " +
          weatherTemp +
          " " +
          "degress Celcius.</h1>"
      );
      res.write(
        "<h4>The weather is currently" + " " + weatherdescription + "</h4>"
      );
      res.write("<img src = " + imageUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
