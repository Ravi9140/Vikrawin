const express = require("express");
const router = express.Router();
const config = require("config");
const { op } = require("sequelize");
const { check, validationResult } = require("express-validator");

// Bring Model
const Farmer = require("../../models/Farmer");
const BiddingEvent = require("../../models/BiddingEvent");
const Crop = require("../../models/Crop");

// Bring Auth Middleware
const farmerauth = require("../../middleware/farmerauth");

// @route api/biddingevent
// @desc Create Bidding Event
// @access Private

router.post("/", farmerauth, async (req, res) => {
  //   const farmer = await Farmer.findByPk(req.farmer.farmerId, {
  //     attributes: { exclude: ["farmerPassword"] },
  //   });

  const farmerId = req.farmer.farmerId;

  const { quantity, price, fertilizer, soilPh, crop } = req.body;

  const cropName = crop.charAt(0).toUpperCase() + crop.slice(1);

  const cropId = await Crop.findOne(
    { where: { cropName: cropName } },
    { attributes: ["cropId"] }
  );

  const biddingevent = new BiddingEvent({
    sellQuantity: quantity,
    basePrice: price,
    fertilizerType: fertilizer,
    soilPhCertificate: soilPh,
    cropId: cropId,
    farmerId: farmerId,
  });
});
