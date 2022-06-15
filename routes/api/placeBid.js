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

  try {
    const placebid = await sequelize.query(
      "update biddingevent set biddingevent.currentBid = ?,biddingevent.currentBidderId=? where biddingevent.biddingeventId=?;",
      {
        replacements: [cred.bidAmt, req.bidder.bidderId, cred.biddingId],
        type: QueryTypes.UPDATE,
      }
    );
    res.status(200).json({ msg: "Bid Placed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
