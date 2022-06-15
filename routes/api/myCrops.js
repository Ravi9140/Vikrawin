const express = require("express");
const req = require("express/lib/request");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const farmerauth = require("../../middleware/farmerauth");
const router = express.Router();
const BiddingEvent = require("../../models/BiddingEvent");

// @route api/biddingevent
// @desc Getting the Farmers Crops which are sold
// @access Private

router.get("/", farmerauth, async (req, res) => {
  // let cred = req.body;

  try {
    const farmerHistory = await sequelize.query(
      "SELECT biddingevent.biddingeventId,biddingevent.cropName,biddingevent.sellQuantity,biddingevent.basePrice,biddingevent.currentBid,biddingevent.currentBidderId,bidder.bidderName as currentBidderName,bidder.bidderContact as currentBidderContact,bidder.bidderEmail as currentBidderEmail,farmer.farmerName as createrFarmerName,farmer.farmerContact as createrFarmerContact,CONCAT(farmer.farmerCity,' ',farmer.farmerState,' ',farmer.farmerPinCode) as createrFarmerAddress FROM biddingevent INNER JOIN farmer ON biddingevent.createrId=farmer.farmerId LEFT OUTER JOIN bidder ON biddingevent.currentBidderId = bidder.bidderId where biddingevent.isSold=false and biddingevent.createrId=? order by biddingevent.createdAt desc",
      {
        replacements: [req.farmer.farmerId],
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json(farmerHistory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
