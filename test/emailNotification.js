require("./sms.js");
const axios = require("axios");
const baseURL = "http://localhost:5000";

const { expect } = require("chai");

describe("EMAIL", () => {
  describe("POST", () => {
    it("Email Notification /api/emailsend", async () => {
      const body = {
        bidderId: 1,
        msg: "Email Notification Successful",
      };
      const res = await axios.post(`${baseURL}/api/emailsend`, body);
      expect(res.data.msg).to.eql("success");
    });
  });
});
