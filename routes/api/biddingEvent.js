const express = require("express");
const router = express.Router();
const config = require("config");
const { op } = require("sequelize");
const { check, validationResult } = require("express-validator");

// Bring Model
const Farmer = require("../../models/Farmer");
const BiddingEvent = require("../../models/BiddingEvent");

// Bring Auth Middleware
const farmerauth = require("../../middleware/farmerauth");

// @route api/biddingevent
// @desc Create Bidding Event
// @access Private

router.post("/", farmerauth, async (req, res) => {
  let cred = req.body;

  const biddingevent = await BiddingEvent.create({
    cropName: cred.cropName,
    sellQuantity: cred.quantity,
    basePrice: cred.basePrice,
    createrId: req.farmer.farmerId,
  });
  res.status(200).send({ msg: "Bidding Event Created" });
});

module.exports = router;
