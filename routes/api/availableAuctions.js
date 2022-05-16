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
      "select * from biddingevent where biddingevent.biddingeventId NOT IN(select biddingevent.biddingeventId from biddingevent inner join registeredbids on registeredbids.biddingId=biddingevent.biddingeventId where registeredbids.bidderId=?) and isSold=false order by createdAt desc",
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
