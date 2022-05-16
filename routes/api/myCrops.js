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
      "select * from biddingevent where biddingevent.isSold=false and biddingevent.createrId=? order by createdAt desc",
      {
        replacements: [req.farmer.farmerId],
        type: QueryTypes.SELECT,
      }
    );
    res.json(farmerHistory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
