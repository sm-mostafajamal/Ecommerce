const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number },
    inStock: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
