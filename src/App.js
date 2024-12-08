const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello there");
});
app.use("/world", (req, res) => {
  res.send("Hello world");
});
app.listen(7777, () => {
  console.log("hello thre 77");
});
