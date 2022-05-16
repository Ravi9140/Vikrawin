const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { Op } = require("sequelize");
const { check, validationResult } = require("express-validator");

// Bring Model
const Farmer = require("../../models/Farmer");

// @route api/farmer
// @desc    Register Farmer
// @access  Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include valid email").isEmail(),
    check("contact", "Please enter valid contact no").isLength({
      min: 10,
      max: 10,
    }),
    check("address", "Address is required").not().isEmpty(),
    check("city", "city is required").not().isEmpty(),
    check("state", "State sis required").not().isEmpty(),
    check("pincode", "Please enter valid PIN code").isLength({
      min: 6,
      max: 6,
    }),
    check("accountno", "Account no is required").not().isEmpty(),
    check(
      "adhaarno",
      "Please enter valid Aadhaar No. Don't include spaces"
    ).isLength({
      min: 12,
      max: 12,
    }),
    check("panno", "Please enter valid PAN no").isLength({
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
      landarea,
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
    console.log(req.body);
    try {
      // see if farmer exists
      let farmer = await Farmer.findOne({
        where: {
          [Op.or]: {
            farmerEmail: email,
            farmerContact: contact,
            farmerAccountNo: accountno,
            farmerPanNo: panno,
            farmerAdhaarNo: adhaarno,
          },
        },
      });

      if (farmer) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Farmer Already exists" }] });
      }

      farmer = new Farmer({
        farmerName: name,
        farmerEmail: email,
        farmerContact: contact,
        farmerLandArea: landarea,
        farmerAddress: address,
        farmerCity: city,
        farmerState: state,
        farmerPinCode: pincode,
        farmerAccountNo: accountno,
        farmerAdhaarNo: adhaarno,
        farmerAdhaarCard: adhaarcard,
        farmerPanNo: panno,
        farmerPanCard: pancard,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      farmer.farmerPassword = await bcrypt.hash(password, salt);
      await farmer.save();

      res.send({ msg: "Farmer Registered Successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
