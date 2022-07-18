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
  const products = await Product.find({});
  console.log(products);
  console.log(`Here are all the products!`);
});

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}. CHECK IT OUT!`);
});
