const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { Op } = require("sequelize");
const { check, validationResult } = require("express-validator");

// Bring Model
const Bidder = require("../../models/Bidder");

// @route api/bidder
// @desc    Register Bidder
// @access  Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include valid email").isEmail(),
    check("contact", "Please enter valid contact Number.").isLength({
      min: 10,
      max: 10,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      contact,
      address,
      city,
      state,
      pincode,
      accountno,
      adhaarno,
      adhaarcard,
      panno,
      pancard,
      password,
    } = req.body;

    try {
      // see if bidder exists
      let bidder = await Bidder.findOne({
        where: {
          [Op.or]: {
            bidderEmail: email,
            bidderContact: contact,
            bidderAccountNo: accountno,
            bidderPanNo: panno,
            bidderAdhaarNo: adhaarno,
          },
        },
      });

      if (bidder) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Bidder Already exists" }] });
      }

      bidder = new Bidder({
        bidderName: name,
        bidderEmail: email,
        bidderContact: contact,
        bidderAddress: address,
        bidderCity: city,
        bidderState: state,
        bidderPinCode: pincode,
        bidderAccountNo: accountno,
        bidderAdhaarNo: adhaarno,
        bidderAdhaarCard: adhaarcard,
        bidderPanNo: panno,
        bidderPanCard: pancard,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      bidder.bidderPassword = await bcrypt.hash(password, salt);
      await bidder.save();

      res.send({ msg: "Bidder Registered Successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
