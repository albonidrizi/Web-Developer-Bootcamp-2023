const { log } = require("console");
const express = require("express");
const https = require("https");

const app = express();


app.get("/", (req, res)=>{

    const url ="https://api.openweathermap.org/data/2.5/weather?q=tetovo,mk&appid=af9fd2dec475580436d70079d39ba065";

    https.get(url, (res)=>{
        console.log(res.statusCode);

        res.on("data", (data)=>{
            console.log(data);
        })
    });

   res.send("Server is up and running.");
})







app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})