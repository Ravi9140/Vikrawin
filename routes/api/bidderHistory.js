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
      "select * from biddingevent where biddingevent.isSold=true and biddingevent.currentBidderId=? order by sellDate desc",
      {
        replacements: [req.bidder.bidderId],
        type: QueryTypes.SELECT,
      }
    );
    res.json(bidderHistory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
