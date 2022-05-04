const express = require("express");
const bidderauth = require("../../middleware/bidderauth");
const Bidder = require("../../models/Bidder");

const router = express.Router();

// @route api/bidderprofile
// @desc View Bidder Profile
// @desc Private
router.get("/", bidderauth, async (req, res) => {
  try {
    const bidder = await Bidder.findByPk(req.bidder.bidderId, {
      exclude: ["bidderPassword"],
    });
    console.log(req.bidder.bidderId);
    res.json(bidder);
    console.log(bidder);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route api/bidderprofile/:id
// @desc Edit Bidder Profile
// @desc Private

router.patch("/", bidderauth, async (req, res) => {
  try {
    const id = req.bidder.bidderId;
    // console.log(id);
    const {
      name,
      email,
      contact,
      address,
      city,
      state,
      pincode,
      accountno,
      adhaarno,
      adhaarcard,
      panno,
      pancard,
    } = req.body;

    const bidder = await Bidder.findByPk(id);
    bidder.bidderName = name;
    bidder.bidderEmail = email;
    bidder.bidderContact = contact;
    bidder.bidderAddress = address;
    bidder.bidderCity = city;
    bidder.bidderState = state;
    bidder.bidderPinCode = pincode;
    bidder.bidderAccountNo = accountno;
    bidder.bidderAdhaarNo = adhaarno;
    bidder.bidderAdhaarCard = adhaarcard;
    bidder.bidderPanNo = panno;
    bidder.bidderPanCard = pancard;

    await bidder.save();
    console.log(bidder);
    res.send({ msg: "Profile Updated Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
