/* update password to database */
var nodemailer = require("nodemailer");
const express = require("express");
const Farmer = require("../../models/Farmer");
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
      '<p>You requested for reset password, kindly use this <a href="https://vikrawin.herokuapp.com/FarmerResetPassword?token=' +
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

router.post("/reset-password", async (req, res, next) => {
  const email = req.body.email;

  try {
    let farmer = await Farmer.findOne({ where: { farmerEmail: email } });
    if (farmer) {
      let token = randtoken.generate(20);

      let sent = sendEmail(email, token);

      if (sent != "0") {
        farmer.token = token;
        farmer.save();
        res.send({
          msg: "The reset password link has been sent to your email address.",
          type: "success",
        });
      } else {
        res.send({
          msg: "Something went wrong. Please try again.",
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
router.post("/update-password", async (req, res) => {
  var token = req.body.token;
  var password = req.body.password;

  try {
    let farmer = await Farmer.findOne({ where: { token: token } });
    if (farmer) {
      // let saltRounds=10;
      const salt = await bcrypt.genSalt(10);
      farmer.farmerPassword = await bcrypt.hash(password, salt);
      const newtoken = randtoken.generate(20);
      farmer.token = newtoken;
      farmer.save();
      res.send({ msg: "Password updated successfully.", type: "success" });
    } else {
      res.send({
        msg: "Something went wrong. Please try again.",
        type: "warning",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
