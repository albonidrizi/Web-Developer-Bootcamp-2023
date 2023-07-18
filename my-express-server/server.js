 const express = require("express");
 const app = express();
 const port = 3000;

 app.get("/", (req, res) => {
   res.send("Hello World!");
 });

 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
 });

 app.get("/contact", (req, res)=>{

  res.send("Contact me at : albonidrizi@gmail.com ");
 });

 app.get("/about", (req,res)=>{
  res.send("I am software developer with 3 years experience, and I like to code")
 })

 app.get("/hobbies",(req,res)=>{
  res.send("<ul><li>coffee</li><li>code</li><li>sport</li></ul>");
 })