/* update password to database */
var nodemailer = require("nodemailer");
const express = require("express");
const Farmer = require("../../models/Farmer");
const Bidder = require("../../models/Bidder");
const router = express.Router();
const randtoken = require("rand-token");
const bcrypt = require("bcrypt");

const sendEmail = (email1, message1, email2, message2) => {
  let farmerEmail = email1;
  let farmerMessage = message1;
  let bidderEmail = email2;
  let bidderMessage = message2;

  let mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vikrawin2022@gmail.com", // Your email id
      pass: "vikraWin@123", // Your password
    },
  });

  let mailOptions1 = {
    from: "vikrawin2022@gmail.com",
    to: farmerEmail,
    subject: "Your crop is sold",
    html: farmerMessage,
  };
  let mailOptions2 = {
    from: "vikrawin2022@gmail.com",
    to: bidderEmail,
    subject: "You have won the bidding",
    html: bidderMessage,
  };

  mail.sendMail(mailOptions1, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });

  mail.sendMail(mailOptions2, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
};

router.post("/", async (req, res) => {
  const bidderId = req.body.bidderId;
  const farmerId = req.body.farmerId;
  const message1 = req.body.msg1;
  const message2 = req.body.msg2;

  try {
    let farmer = await Farmer.findOne({ where: { farmerId: farmerId } });
    let bidder = await Bidder.findOne({ where: { bidderId: bidderId } });
    if (farmer && bidder) {
      let sent = sendEmail(
        farmer.farmerEmail,
        message1,
        bidder.bidderEmail,
        message2
      );
      res.send({ msg: "success" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
