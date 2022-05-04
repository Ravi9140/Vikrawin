const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const req = require("express/lib/request");
const Farmer = require("../../models/Farmer");
const farmerauth = require("../../middleware/farmerauth");

// @route   GET api/famerauth
// @desc    Test Route
// @access  Public
router.get("/", farmerauth, async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.farmer.farmerId, {
      attributes: { exclude: ["farmerPassword"] },
    });
    res.json(farmer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/farmerauth
// @desc    Authenticate Farmer & get token
// @access  Public

router.post(
  "/",
  [
    check("email", "Please include valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if mentee exists
      let farmer = await Farmer.findOne({ where: { farmerEmail: email } });

      if (!farmer) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, farmer.farmerPassword);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // return json webtoken
      const payload = {
        farmer: {
          farmerId: farmer.farmerId,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ payload, token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
