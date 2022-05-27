const express = require("express");
const req = require("express/lib/request");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const bidderauth = require("../../middleware/bidderauth");
const router = express.Router();

// @route api/biddingevent
// @desc Getting the Auctions to which the Bidder has registered
// @access Private

router.get("/", bidderauth, async (req, res) => {
  try {
    const regAuctions = await sequelize.query(
      "select biddingevent.* from biddingevent inner join registeredbids on registeredbids.biddingId=biddingevent.biddingeventId where registeredbids.bidderId=? order by registeredbids.createdAt desc",
      {
        replacements: [req.bidder.bidderId],
        type: QueryTypes.SELECT,
      }
    );
    res.json(regAuctions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
