const Product = require("../models/Product");
const {
  verifyTokenAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();

// Create
router.post("/", verifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update
router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE

router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product successfully deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET

router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL
router.get("/", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const products = query
      ? await Product.find().sort({ _id: -1 }).limit(5)
      : await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER STATE
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await Product.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
