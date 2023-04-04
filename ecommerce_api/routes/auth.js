const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASS
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // !user && res.status(401).json("Wrong Credentials");
    if (!user) return res.status(401).json("Wrong Credentials");

    const decryptPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_PASS
    );

    const decrypt = decryptPassword.toString(CryptoJS.enc.Utf8);
    if (decrypt !== req.body.password)
      return res.status(401).json("Wrong Credentials");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    const { password, ...other } = user._doc;
    res.status(200).json({ ...other, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
