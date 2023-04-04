const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const registerRouter = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/auth", registerRouter);

app.listen(PORT, () => console.log(`Backend server is running on ${PORT}`));
