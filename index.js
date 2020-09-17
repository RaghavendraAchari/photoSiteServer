const express = require("express");
const app = express();

const port = 5555;

app.get("/", (req, res) => {
  res.send("Server is responding");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
