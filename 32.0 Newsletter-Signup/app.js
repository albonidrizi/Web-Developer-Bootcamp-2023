
//you can copy for each project 
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))




app.get("/", (req, res)=>{
   res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req,res)=>{
   let firstName = req.body.fName;
   let lastName = req.body.lName;
   let email = req.body.email;

   console.log(firstName,lastName,email)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});