const data = require("./data");
const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
