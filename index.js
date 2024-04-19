const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(8080, () => {
  console.log("listening at 8080");
});
