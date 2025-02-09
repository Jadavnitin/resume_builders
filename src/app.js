// require("./db/conn");
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');



const port = process.env.PORT ||7000;


const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views")
const partial_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_path));



app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partial_path);




app.get("/", (req, res) => {
   res.render("home")
})
app.get("/fillDetails", (req, res) => {
   res.render("fillDetails")
})

app.get("/myResume", (req, res) => {
   res.render("myResume")
})

app.get("/about", (req, res) => {
   res.render("about")
})




app.listen(port, () => {
   console.log(`server is runnning at ${port}`);
})