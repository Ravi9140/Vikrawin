const express = require("express");
const sequelize = require("../../config/db");
const { QueryTypes } = require("sequelize");
const farmerauth = require("../../middleware/farmerauth");
const router = express.Router();
const BiddingEvent = require("../../models/BiddingEvent");

// @route api/biddingevent
// @desc Getting the Farmers Crops which are sold
// @access Private

router.get("/", farmerauth, async (req, res) => {
  try {
    const farmerHistory = await sequelize.query(
      "select * from biddingevent where biddingevent.isSold=true and biddingevent.createrId=? order by sellDate desc",
      {
        replacements: [req.farmer.farmerId],
        type: QueryTypes.SELECT,
      }
    );
    console.log(farmerHistory);
    res.json(farmerHistory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
