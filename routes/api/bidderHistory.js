const express = require("express");
const req = require("express/lib/request");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const bidderauth = require("../../middleware/bidderauth");

const router = express.Router();
const BiddingEvent = require("../../models/BiddingEvent");

// @route api/biddingevent
// @desc Getting the Farmers Crops which are sold
// @access Private

router.get("/", bidderauth, async (req, res) => {
  try {
    const bidderHistory = await sequelize.query(
      "SELECT biddingevent.biddingeventId,biddingevent.cropName,biddingevent.sellQuantity,biddingevent.basePrice,biddingevent.currentBid,biddingevent.sellDate,farmer.farmerContact as createrFarmerContact,farmer.farmerName as createrFarmerName,farmer.farmerState as createrFarmerAddress FROM biddingevent INNER JOIN farmer ON biddingevent.createrId=farmer.farmerId INNER JOIN bidder ON biddingevent.currentBidderId = bidder.bidderId where biddingevent.isSold=true and biddingevent.currentBidderId=? order by biddingevent.sellDate desc",
      {
        replacements: [req.bidder.bidderId],
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json(bidderHistory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
