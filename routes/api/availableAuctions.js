const express = require("express");
const req = require("express/lib/request");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const bidderauth = require("../../middleware/bidderauth");
const router = express.Router();

// @route api/biddingevent
// @desc Getting the Available auctions to which the Bidder has not yet registered
// @access Private

router.get("/", bidderauth, async (req, res) => {
  try {
    const availAuctions = await sequelize.query(
      "SELECT DISTINCT biddingevent.biddingeventId,biddingevent.cropName,biddingevent.sellQuantity,biddingevent.basePrice,biddingevent.currentBid,bidder.bidderName as currentBidderName,CONCAT(farmer.farmerCity,' ',farmer.farmerState,' ',farmer.farmerPinCode) as createrFarmerAddress,farmer.farmerName as createrFarmerName from biddingevent INNER JOIN farmer ON biddingevent.createrId=farmer.farmerId LEFT OUTER JOIN bidder ON biddingevent.currentBidderId = bidder.bidderId LEFT OUTER JOIN registeredbids ON biddingevent.biddingeventId = registeredbids.biddingId where biddingevent.biddingeventId NOT IN (SELECT biddingevent.biddingeventId FROM biddingevent LEFT OUTER JOIN bidder ON biddingevent.currentBidderId = bidder.bidderId LEFT OUTER JOIN registeredbids ON biddingevent.biddingeventId = registeredbids.biddingId where registeredbids.bidderId=?) and biddingevent.isSold=false order by biddingevent.createdAt desc",
      {
        replacements: [req.bidder.bidderId],
        type: QueryTypes.SELECT,
      }
    );
    res.json(availAuctions);
    console.log(availAuctions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
