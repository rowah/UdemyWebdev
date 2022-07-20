const express = require("express");
const mongoose = require("mongoose");
const app = express(); //result of executing express
const PORT = process.env.PORT || 3000;
const path = require("path");
const methodOverride = require("method-override");

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
//tells express to use middleware to get info from post request body
app.use(express.urlencoded({ extendend: true }));
app.use(methodOverride("_method"));
//defines actual routes to querries mongo db
app.get("/products", async (req, res) => {
  //querrying product model
  //we await some mongoose operation all the time
  const products = await Product.find({});
  console.log(products);
  //we then render the index.ejs file instead of sending text
  //res.send(`ALL THE PRODUCTS`);
  //as a second argument we pass through all the products
  res.render("products/index", { products });
});
//route servers up the form and creates a new product
app.get("/products/new", (req, res) => {
  res.render("products/new");
});

//route for submitting form
app.post("/products", async (req, res) => {
  //making an actual product by passing through req.body straight from the request
  const newProduct = new Product(req.body);
  await newProduct.save();
  //redirecting the route
  res.redirect(`/products/${newProduct._id}`);
  //   console.log(newProduct);
  //   //console.log(req.body);
  //   res.send(`Product in the making!!`);
});

//creating route that views details about a single product
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  //   console.log(product);
  res.render("products/show", { product });
});

//editing route with id(dets product to be editted)
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

//creating an end point to submit to (put(replacing), patch(replacing a portion))
app.put("/product/:id", async (req, res) => {
  console.log(req.body);
  res.send(`PUT!`);
});

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}. CHECK IT OUT!`);
});
