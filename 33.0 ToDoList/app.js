const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/todolistDB",{userNewUrlParser: true})

const itemsSchema = {
    name : String
}

const Item = mongoose.model(
    "Item", itemsSchema
)

const item1= new Item({
    name: "Hit the button to add a new item."
})

const item2 = new Item({
  name: "Hit the button to add a new item.",
});

const item3 = new Item({
  name: "Hit the button to add a new item.",
});



app.get("/", function(req, res){

    res.render("list", {listTitle: "Today", newListItems: items});

})

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item)
    res.redirect("/work")
  } else {
    items.push(item)
    res.redirect("/")
  }
});