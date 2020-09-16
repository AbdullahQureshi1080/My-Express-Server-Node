const express = require("express");
const https = require("https");

const app = express();

// Get Data from external server and parse it using JSON parse and logging it into the console. 

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=df43c8df60b436f696e34a10a8b0664d&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      console.log(desc);
    });
  });

  res.send("server is up and running.");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
