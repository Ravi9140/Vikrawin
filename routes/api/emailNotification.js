/* update password to database */
var nodemailer = require("nodemailer");
const express = require("express");
const config = require("config");
const Bidder = require("../../models/Bidder");
const router = express.Router();

const user = config.get("user");
const pass = config.get("pass");
const sendEmail = (email, message) => {
  let bidderEmail = email;
  let bidderMessage = message;

  let mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  let mailOptions = {
    from: "vikrawin2022@gmail.com",
    to: bidderEmail,
    subject: "You have won the bidding",
    html: bidderMessage,
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
};

router.post("/", async (req, res) => {
  const bidderId = req.body.bidderId;
  const message = req.body.msg;

  try {
    let bidder = await Bidder.findOne({ where: { bidderId: bidderId } });
    if (bidder) {
      let sent = sendEmail(bidder.bidderEmail, message);
      res.send({ msg: "success" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
