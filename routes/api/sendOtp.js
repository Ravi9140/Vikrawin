const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

const sid = config.get("TWILIO_ACCOUNT_SID");
const authtoken = config.get("TWILIO_AUTH_TOKEN");
const serviceID = config.get("serviceID");

const client = require("twilio")(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
);

router.post(
  "/",
  [
    check("contact", "Please Enter valid Mobile No.").isLength({
      min: 10,
      max: 10,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { contact } = req.body;
    try {
      const sms = await client.verify
        .services(config.serviceID)
        .verifications.create({
          to: `+91${contact}`,
          channel: "sms",
        });
      console.log(res);
      res.status(200).json(sms);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

router.post("/verify-otp", async (req, res) => {
  const { contact, otp } = req.body;
  try {
    const verify = await client.verify
      .services(config.serviceID)
      .verificationChecks.create({
        to: `+91${contact}`,
        code: otp,
      });
    res.status(200).json(verify);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
