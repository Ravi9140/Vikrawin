require("./server.js");
const axios = require("axios");
const baseURL = "http://localhost:5000";

const { expect } = require("chai");

describe("SMS", () => {
  describe("POST", () => {
    it("/api/send", async () => {
      const body = {
        message: "SMS Test successful",
        phone: "+918308164172",
      };
      const res = await axios.post(`${baseURL}/api/send`, body);
      expect(res.status).to.be.eql(200);
    });
  });
});
