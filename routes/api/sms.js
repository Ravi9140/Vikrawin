const express = require("express");
const router = express.Router();
const config = require("config");

const sid = config.get("TWILIO_ACCOUNT_SID");
const authtoken = config.get("TWILIO_AUTH_TOKEN");
const number = config.get("TWILIO_PHONE_NUMBER");

const client = require("twilio")(sid, authtoken);

router.post("/", async (req, res) => {
  const { phone, message } = req.body;
  console.log(phone, message);
  try {
    const msg = await client.messages.create({
      body: message,
      from: number,
      to: phone,
    });
    res.status(200).send(msg);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
