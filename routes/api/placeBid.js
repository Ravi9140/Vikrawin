const express = require("express");
const req = require("express/lib/request");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const bidderauth = require("../../middleware/bidderauth");
const router = express.Router();
const BiddingEvent = require("../../models/BiddingEvent");
const Bidder = require("../../models/Bidder");

// @route api/endBidding
// @desc Allowing the Farmer to End the Bidding
// @access Private

router.patch("/", bidderauth, async (req, res) => {
  let cred = req.body;

  let bidder = await Bidder.findByPk(req.bidder.bidderId);

  try {
    const placebid = await sequelize.query(
      "update biddingevent set biddingevent.currentBid = case when biddingevent.currentBid< biddingevent.basePrice then biddingevent.basePrice  else biddingevent.currentBid+? end,biddingevent.currentBidderId=?,biddingevent.currentBidderName=? where biddingevent.biddingeventId=?;",
      {
        replacements: [
          cred.bidAmt,
          req.bidder.bidderId,
          bidder.bidderName,
          cred.biddingId,
        ],
        type: QueryTypes.UPDATE,
      }
    );
    res.json({ msg: "Bid Placed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
