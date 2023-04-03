const { verifyTokenAndAuthorization } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  // if user changes password verify and encrypt
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASS
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
