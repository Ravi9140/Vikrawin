require("./emailNotification.js");
const axios = require("axios");
const baseURL = "http://localhost:5000";
const setAuthToken = require("./utils/setAuthToken.js");
const { expect } = require("chai");

describe("FARMER", () => {
  let token;
  let farmerId;
  describe("LOGIN", () => {
    describe("LOGIN SUCCESS", () => {
      it(" /api/farmerauth", async () => {
        const body = {
          email: "jadhavganesh14091999@gmail.com",
          password: "12345",
        };
        const res = await axios.post(`${baseURL}/api/farmerauth`, body);
        farmerId = res.data.payload.farmer.farmerId;
        token = res.data.token;
        setAuthToken(token);
      });
    });

    describe("LOGIN FAILED", () => {
      it("POST /api/farmerauth", async () => {
        const body = {
          email: "grgaikwad09@gmail.com",
          password: "12345",
        };
        try {
          const res = await axios.post(`${baseURL}/api/farmerauth`, body);
        } catch (error) {
          expect(error.response.status).to.be.eql(400);
          expect(error.response.data.errors[0].msg).to.be.eql(
            "Invalid Credentials"
          );
        }
      });
    });
  });

  describe("RESET PASSWORD", () => {
    describe("Email Not Registered", () => {
      it("POST /api/bidder-reset/resetpassword", async () => {
        const body = {
          email: "grgaikwad09@gmail.com",
        };
        const res = await axios.post(
          `${baseURL}/api/reset/reset-password`,
          body
        );
        expect(res.data.type).to.eql("error");
      });
    });

    describe("Password Reset Link Sent", () => {
      it("POST /api/bidder-reset/resetpassword", async () => {
        const body = {
          email: "jadhavganesh14091999@gmail.com",
        };
        const res = await axios.post(
          `${baseURL}/api/reset/reset-password`,
          body
        );
        expect(res.status).to.be.eql(200);
        expect(res.data.type).to.eql("success");
      });
    });
  });

  describe("AUCTION", () => {
    describe("CREATE AUCTION", () => {
      it("POST /api/createauction", async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = {
          cropName: "Pineapple",
          quantity: 50,
          basePrice: 2000,
        };

        const res = await axios.post(
          `${baseURL}/api/createauction`,
          body,
          config
        );
        expect(res.status).to.be.eql(200);
        expect(res.data.msg).to.eql("Bidding Event Created");
      });
    });
  });

  describe("MY CROPS", () => {
    let biddingID;
    describe("View My Crops", () => {
      it("GET/api/mycrops", async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.get(`${baseURL}/api/mycrops`, config);
        if (res.data.length > 0) {
          biddingID = res.data[0].biddingeventId;
        }
        expect(res.data).to.be.an("array");
        expect(res.status).to.be.eql(200);
      });
    });

    describe("End Bidding", () => {
      it("PATCH /api/endbid", async () => {
        if (biddingID != null) {
          const body = {
            biddingeventId: biddingID,
          };
          const res = await axios.patch(`${baseURL}/api/endbid`, body);
          expect(res.status).to.be.eql(200);
          expect(res.data.msg).to.eql("Bidding Stopped");
        }
      });
    });
  });

  describe("FARMER HISTORY", () => {
    describe("View Sell History", () => {
      it("GET /api/farmerhistory", async () => {
        const res = await axios.get(`${baseURL}/api/farmerhistory`);
        expect(res.status).to.be.eql(200);
        expect(res.data).to.be.an("array");
      });
    });
  });

  describe("FARMER PROFILE", () => {
    describe("View Profile", () => {
      it("GET /api/farmerprofile", async () => {
        const res = await axios.get(`${baseURL}/api/farmerprofile`);
        expect(res.status).to.be.eql(200);
        expect(res.data.farmerId).to.eql(farmerId);
      });
    });

    describe("Update Profile", () => {
      it("PATCH /api/farmerprofile", async () => {
        const body = {
          contact: "8308164172",
          address: "Hatgaon Road, Bodhegaon",
          city: "Pune",
        };
        const res = await axios.patch(`${baseURL}/api/farmerprofile`, body);
        expect(res.status).to.be.eql(200);
        expect(res.data.msg).to.eql("Profile Updated Successfully");
      });
    });
  });
});
