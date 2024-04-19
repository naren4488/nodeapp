const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "hello world" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("listening at 8080");
});
