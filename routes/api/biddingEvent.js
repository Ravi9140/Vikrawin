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

  let farmer1 = await Farmer.findByPk(req.farmer.farmerId);
  console.log(farmer1);

  const biddingevent = await BiddingEvent.create({
    cropName: cred.cropName,
    sellQuantity: cred.quantity,
    basePrice: cred.basePrice,
    //  isSold: cred.sold,
    // currentBid: cred.currentBid,
    createrFarmerName: farmer1.farmerName,
    createrId: req.farmer.farmerId,
  });
  console.log(biddingevent);
  res.send({ msg: `Bidding Event Created` });
});

module.exports = router;
