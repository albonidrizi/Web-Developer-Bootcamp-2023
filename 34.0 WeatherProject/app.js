const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
 res.sendFile(__dirname + "/index.html")

})

app.post("/", (req,res)=>{

  const query = req.body.cityName;
  const unite = "matric";
  const apiKey = "af9fd2dec475580436d70079d39ba065";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" +apiKey +"&units" + unite;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;

      const name = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      const celcius = temp - 273.15;

      res.write("<h1>In the city of " + name + "</h1>");
      res.write("<h2>The wather is cuttently " + description + "</h2>");
      res.write(
        "<h3>The temperature is " + celcius + " degrees Celcius.</h3>"
      );
      res.write("<img src=" + imgUrl + ">");
      res.send();
    });
  });
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})