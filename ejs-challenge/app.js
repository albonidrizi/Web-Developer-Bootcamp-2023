const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const e = require("express");

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const homeStartingContent =
  "Kjo është përmbajtja fillestare për faqen kryesore.";
const aboutContent = "Ky është një tekst për faqen Rreth Nesh.";
const contactContent = "Kontaktoni me ne nëpërmjet formularit kontaktues.";

let posts =[];

// app.post("/", (req, res) => {
//   res.render("home.ejs", { homeStarting: homeStartingContent });
// });

app.get("/", (req, res) => {
  res.render("home.ejs", { homeStarting: homeStartingContent });
  console.log(posts)
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
  var post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };

  posts.push(post);

  res.redirect("/");

});


app.listen(port, () => {
  console.log(`Serveri po punon në portin ${port}`);
});

