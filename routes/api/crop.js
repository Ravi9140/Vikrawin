const express = require("express");

const router = express.Router();

const Crop = require("../../models/Crop"); // For Crop Model

// @route api/crop
router.get("/", async (req, res) => {
  try {
    const crops = await Crop.findAll({ exclude: ["cropId"] });
    console.log(crop);
    res.json(crops);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
