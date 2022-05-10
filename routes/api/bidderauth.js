const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const req = require("express/lib/request");
const Bidder = require("../../models/Bidder");
const bidderauth = require("../../middleware/bidderauth");

// @route   GET api/bidderauth
// @desc    Test Route
// @access  Public
router.get("/", bidderauth, async (req, res) => {
  try {
    const bidder = await Bidder.findByPk(req.bidder.bidderId, {
      attributes: { exclude: ["bidderPassword"] },
    });
    res.json(bidder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/bidderauth
// @desc    Authenticate Bidder & get token
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
      // See if bidder exists
      let bidder = await Bidder.findOne({ where: { bidderEmail: email } });

      if (!bidder) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, bidder.bidderPassword);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // return json webtoken
      const payload = {
        bidder: {
          bidderId: bidder.bidderId,
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
