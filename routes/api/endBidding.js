const express = require("express");
const req = require("express/lib/request");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const farmerauth = require("../../middleware/farmerauth");
const router = express.Router();
const BiddingEvent = require("../../models/BiddingEvent");

// @route api/endBidding
// @desc Allowing the Farmer to End the Bidding
// @access Private

router.patch("/", farmerauth, async (req, res) => {
  let cred = req.body;

  try {
    const endbid = await sequelize.query(
      "Update biddingevent set biddingevent.isSold=true,biddingevent.sellDate=NOW() where biddingevent.biddingeventId=?",
      {
        replacements: [cred.biddingeventId],
        type: QueryTypes.UPDATE,
      }
    );
    res.json({ msg: "Bidding Stopped" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
