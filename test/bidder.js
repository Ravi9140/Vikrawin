require("./emailNotification.js");
require("./farmer.js");
const axios = require("axios");
const baseURL = "http://localhost:5000";
const setAuthToken = require("./utils/setAuthToken");

const { expect } = require("chai");

describe("BIDDER", () => {
  let token;
  let biddingId = null;
  let bidderId = null;
  describe("LOGIN", () => {
    describe("LOGIN SUCCESS", () => {
      it("POST /api/bidderauth", async () => {
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

    describe("LOGIN FAILED", () => {
      it("POST /api/bidderauth", async () => {
        const body = {
          email: "patelravi09272@gmail.com",
          password: "12345",
        };
        try {
          const res = await axios.post(`${baseURL}/api/bidderauth`, body);
        } catch (error) {
          expect(error.response.data.errors[0].msg).to.be.eql(
            "Invalid Credentials"
          );
        }
      });
    });
  });

  xdescribe("RESET PASSWORD", () => {
    describe("Email Not Registered", () => {
      it("POST /api/bidder-reset/resetpassword", async () => {
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
      it("POST /api/bidder-reset/resetpassword", async () => {
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

  describe("AUCTIONS", () => {
    describe("View Available Auctions", () => {
      it("GET /api/availableauctions", async () => {
        const res = await axios.get(`${baseURL}/api/availableauctions`);
        if (res.data.length > 0) {
          biddingId = res.data[0].biddingeventId;
        }
        expect(res.data).to.be.an("array");
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
    let id = null;
    let currentBid = null;
    describe("View Registered Auction", () => {
      it("GET /api/registeredbids", async () => {
        const res = await axios.get(`${baseURL}/api/registeredbids`);
        if (res.data.length > 0) {
          res.data.every((auction) => {
            if (!auction.isSold) {
              id = auction.biddingeventId;
              currentBid = auction.currentBid;
              return false;
            }
          });
        }
        expect(res.data).to.be.an("array");
      });
    });

    describe("Place Bid", () => {
      it("GET /api/placebid", async () => {
        if (id != null) {
          const body = {
            bidAmt: currentBid + 100,
            biddingId: id,
          };

          const res = await axios.patch(`${baseURL}/api/placebid`, body);
          expect(res.data.msg).to.eql("Bid Placed");
        }
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

  xdescribe("BIDDER PROFILE", () => {
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
