const express = require("express");
const mongoose = require("mongoose");
const app = express(); //result of executing express
const PORT = process.env.PORT || 3000;
const path = require("path");

mongoose
  .connect(`mongodb://localhost:27017/dog`, {
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

app.get("/dog", (req, res) => {
  console.log(`WOOF!`);
});

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}. CHECK IT OUT!`);
});
