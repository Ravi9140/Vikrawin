const express = require("express");
const farmerauth = require("../../middleware/farmerauth");
const Farmer = require("../../models/Farmer");
const router = express.Router();

// @route api/farmerprofile
// @desc View Farmer Profile
// @desc Private
router.get("/", farmerauth, async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.farmer.farmerId, {
      exclude: ["farmerPassword"],
    });
    console.log(req.farmer.farmerId);
    res.json(farmer);
    console.log(farmer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route api/farmerprofile/:id
// @desc Edit Farmer Profile
// @desc Private

router.patch("/", farmerauth, async (req, res) => {
  try {
    const id = req.farmer.farmerId;
    console.log(id);
    const {
      name,
      email,
      contact,
      landarea,
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

    const farmer = await Farmer.findByPk(id);
    farmer.farmerName = name;
    farmer.farmerEmail = email;
    farmer.farmerContact = contact;
    farmer.farmerLandArea = landarea;
    farmer.farmerAddress = address;
    farmer.farmerCity = city;
    farmer.farmerState = state;
    farmer.farmerPinCode = pincode;
    farmer.farmerAccountNo = accountno;
    farmer.farmerAdhaarNo = adhaarno;
    farmer.farmerAdhaarCard = adhaarcard;
    farmer.farmerPanNo = panno;
    farmer.farmerPanCard = pancard;

    await farmer.save();
    console.log(farmer);
    res.send({ msg: "Profile Updated Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
