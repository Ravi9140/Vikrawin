/* update password to database */
var nodemailer = require("nodemailer");
const express = require("express");
const Bidder = require("../../models/Bidder");
const router = express.Router();
const config = require("config");
const randtoken = require("rand-token");
const bcrypt = require("bcrypt");

const user = config.get("user");
const pass = config.get("pass");
const sendEmail = (email1, token1) => {
  let email = email1;
  let token = token1;

  let mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user, // Your email id
      pass: pass, // Your password
    },
  });

  let mailOptions = {
    from: "vikrawin2022@gmail.com",
    to: email,
    subject: "Reset Password Link - vikraWin",
    html:
      '<p>You requested for reset password, kindly use this <a href="https://vikrawin.herokuapp.com/BidderResetPassword?token=' +
      token +
      '">link</a> to reset your password</p>',
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
};

router.post("/resetpassword", async (req, res, next) => {
  const email = req.body.email;

  try {
    let bidder = await Bidder.findOne({ where: { bidderEmail: email } });
    if (bidder) {
      let token = randtoken.generate(20);

      let sent = sendEmail(email, token);

      if (sent != "0") {
        bidder.token = token;
        bidder.save();
        res.send({
          msg: "The reset password link has been sent to your email address.",
          type: "success",
        });
      } else {
        res.send({
          msg: "Something goes to wrong. Please try again.",
          type: "warning",
        });
      }
    } else {
      console.log("2");
      type = "error";
      res.send({ msg: "The Email is not registered with us", type: "error" });
    }
  } catch (error) {
    console.log(error);
  }
});

/* update password */
router.post("/updatepassword", async (req, res) => {
  var token = req.body.token;
  var password = req.body.password;

  try {
    let bidder = await Bidder.findOne({ where: { token: token } });
    if (bidder) {
      // let saltRounds=10;
      const salt = await bcrypt.genSalt(10);
      let newToken = randtoken.generate(20);
      bidder.bidderPassword = await bcrypt.hash(password, salt);
      bidder.token = newToken;
      bidder.save();
      res.send({ msg: "Password updated successfully.", type: "success" });
    } else {
      res.send({
        msg: "Something goes to wrong. Please try again.",
        type: "warning",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
