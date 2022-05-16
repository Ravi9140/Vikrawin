const express = require("express");
const router = express.Router();
const config = require("config");
const { op } = require("sequelize");
const { check, validationResult } = require("express-validator");

const RegisteredBids = require("../../models/RegisteredBids");

// Bring Auth Middleware
const bidderauth = require("../../middleware/bidderauth");

// @route api/biddingevent
// @desc Create Bidding Event
// @access Private

router.post("/", bidderauth, async (req, res) => {
  const { biddingeventId } = req.body;
  try {
    const register = await RegisteredBids.create({
      bidderId: req.bidder.bidderId,
      biddingId: biddingeventId,
    });
    res.json({ msg: "Successfully registered for auction" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
