require("./emailNotification.js");
require("./farmer.js");
const axios = require("axios");
const baseURL = "http://localhost:5000";
const setAuthToken = require("./utils/setAuthToken");

const { expect, config } = require("chai");

xdescribe("BIDDER", () => {
  let token;
  let biddingId = null;
  let bidderId = null;
  describe("LOGIN", () => {
    describe("LOGIN SUCCESS", () => {
      it("post", async () => {
        const body = {
          email: "grgaikwad09@gmail.com",
          password: "12345",
        };
        const res = await axios.post(`${baseURL}/api/bidderauth`, body);
        bidderId = res.data.payload.bidder.bidderId;
        token = res.data.token;
        setAuthToken(token);
        // expect(res.data.status).to.be.eql(400);
      });
    });

    xdescribe("LOGIN FAILED", () => {
      it("post", async () => {
        const body = {
          email: "jadhavganesh14091999@gmail.com",
          password: "12345",
        };
        const res = await axios.post(`${baseURL}/api/bidderauth`, body);
        expect(res.data.status).to.be.eql(401);
      });
    });
  });

  xdescribe("RESET PASSWORD", () => {
    describe("Email Not Registered", () => {
      it("post /api/bidder-reset/resetpassword", async () => {
        const body = {
          email: "jadhavganesh14091999@gmail.com",
        };
        const res = await axios.post(
          `${baseURL}/api/bidder-reset/resetpassword`,
          body
        );
        expect(res.data.type).to.eql("error");
      });
    });

    describe("Password Reset Link Sent", () => {
      it("post /api/bidder-reset/resetpassword", async () => {
        const body = {
          email: "grgaikwad09@gmail.com",
        };
        const res = await axios.post(
          `${baseURL}/api/bidder-reset/resetpassword`,
          body
        );
        expect(res.data.type).to.eql("success");
      });
    });
  });

  xdescribe("AUCTIONS", () => {
    describe("View Available Auctions", () => {
      it("GET /api/availableauctions", async () => {
        const res = await axios.get(`${baseURL}/api/availableauctions`);
        if (res.data.length > 0) {
          biddingId = res.data[0].biddingeventId;
          expect(res.data).to.be.an("array");
        }
      });
    });

    describe("Register for auction", () => {
      it("GET /api/registerauction", async () => {
        if (biddingId != null) {
          const body = {
            biddingeventId: biddingId,
          };
          const res = await axios.post(`${baseURL}/api/registerauction`, body);
          expect(res.data.msg).to.eql("Successfully registered for auction");
        }
      });
    });
  });

  xdescribe("MARKET PLACE", () => {
    let id;
    let basePrice;
    describe("View Registered Auction", () => {
      it("GET /api/registeredbids", async () => {
        const res = await axios.get(`${baseURL}/api/registeredbids`);
        id = res.data[0].biddingeventId;
        basePrice = res.data[0].basePrice;
        expect(res.data).to.be.an("array");
      });
    });

    describe("Place Bid", () => {
      it("GET /api/placebid", async () => {
        const body = {
          bidAmt: basePrice + 100,
          biddingId: id,
        };

        const res = await axios.patch(`${baseURL}/api/placebid`, body);
        expect(res.data.msg).to.eql("Bid Placed");
      });
    });
  });

  xdescribe("BIDDER HISTORY", () => {
    describe("View Purchase History", () => {
      it("GET /api/bidderhistory", async () => {
        const res = await axios.get(`${baseURL}/api/bidderhistory`);
        expect(res.data).to.be.an("array");
      });
    });
  });

  describe("BIDDER PROFILE", () => {
    describe("View Profile", () => {
      it("GET /api/bidderprofile", async () => {
        const res = await axios.get(`${baseURL}/api/bidderprofile`);
        expect(res.data.bidderId).to.eql(bidderId);
      });
    });

    describe("Update Profile", () => {
      it("PATCH /api/bidderprofile", async () => {
        const body = {
          contact: "7083939852",
          address: "MG Road",
          city: "Yavatmal",
        };
        const res = await axios.patch(`${baseURL}/api/bidderprofile`, body);
        expect(res.status).to.be.eql(200);
        expect(res.data.msg).to.eql("Profile Updated Successfully");
      });
    });
  });
});
