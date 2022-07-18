const express = require("express");
const mongoose = require("mongoose");
const app = express(); //result of executing express
const PORT = process.env.PORT || 3000;
const path = require("path");

//requires our model
const Product = require("./models/product");

mongoose
  .connect(`mongodb://localhost:27017/farmStand`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MONGO CONNECTION OPEN`);
  })
  .catch((err) => {
    console.log(`Oh NOOO!`);
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//defines actual routes to querries mongo db
app.get("/products", async (req, res) => {
  //querrying product model
  //we await some mongoose operation all the time
  const products = await Product.find({});
  console.log(products);
  //we then render the index.ejs file instead of sending text
  //res.send(`ALL THE PRODUCTS`);
  //as a second argument we pass through all the products
  res.render("products/index");
});

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}. CHECK IT OUT!`);
});
