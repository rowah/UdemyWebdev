const { Console } = require("console");
const express = require("express");
const app = express(); //result of executing express
const PORT = process.env.PORT || 3000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}. CHECK IT OUT!`);
});
