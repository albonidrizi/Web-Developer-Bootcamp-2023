const express = require('express')
const bodyParse = require("body-parser");


const app = express()
const port = 3000

app.use(bodyParse.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html"); 
})

app.post("/", function(req,res){
   let num1 = Number(req.body.num1);
   let num2 = Number(req.body.num2);

   let result = num1 + num2;

  res.send("Thanks for the posting numbers " + result);
})