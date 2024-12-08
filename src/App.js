const express = require("express");

const app = express();

app.post("/user", (req, res) => {
  res.send({ firstname: "sajin", lastname: "sivan" });
});
app.get("/user", (req, res) => {
  res.send("successfully saved");
});
app.delete("/user", (req, res) => {
  res.send("successfully deleted");
});
app.put("/user", (req, res) => {
  res.send("successfully updated");
});
app.use("/test", (req, res) => {
  res.send("Hello there");
});
app.use("/world", (req, res) => {
  res.send("Hell world");
});
app.listen(7777, () => {
  console.log("hello thre 77");
});
