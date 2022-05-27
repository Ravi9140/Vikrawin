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

  let address =
    farmer1.farmerCity +
    " " +
    farmer1.farmerState +
    " " +
    farmer1.farmerPinCode;

  const biddingevent = await BiddingEvent.create({
    cropName: cred.cropName,
    sellQuantity: cred.quantity,
    basePrice: cred.basePrice,
    endDate: cred.endDate,
    createrFarmerName: farmer1.farmerName,
    createrFarmerContact: farmer1.farmerContact,
    createrFarmerAddress: address,
    createrId: req.farmer.farmerId,
  });
  res.send({ msg: `Bidding Event Created` });
});

module.exports = router;
