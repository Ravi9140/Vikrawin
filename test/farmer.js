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
      it("post", async () => {
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
      it("post", async () => {
        const body = {
          email: "grgaikwad09@gmail.com",
          password: "12345",
        };
        const res = await axios.post(`${baseURL}/api/farmerauth`, body);
        expect(res.status).to.be.eql(200);
      });
    });
  });

  xdescribe("RESET PASSWORD", () => {
    describe("Email Not Registered", () => {
      it("post /api/bidder-reset/resetpassword", async () => {
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
      it("post /api/bidder-reset/resetpassword", async () => {
        const body = {
          email: "jadhavganesh14091999@gmail.com",
        };
        const res = await axios.post(
          `${baseURL}/api/reset/reset-password`,
          body
        );
        expect(res.data.type).to.eql("success");
      });
    });
  });

  xdescribe("AUCTION", () => {
    describe("CREATE AUCTION", () => {
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

      it("POST /api/createauction", async () => {
        const res = await axios.post(
          `${baseURL}/api/createauction`,
          body,
          config
        );
        expect(res.data.msg).to.eql("Bidding Event Created");
      });
    });
  });

  xdescribe("MY CROPS", () => {
    let biddingID;
    describe("View My Crops", () => {
      it("GET/api/mycrops", async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.get(`${baseURL}/api/mycrops`, config);
        biddingID = res.data[0].biddingeventId;
        expect(res.data).to.be.an("array");
      });
    });
    xdescribe("End Bidding", () => {
      it("PATCH /api/endbid", async () => {
        const body = {
          biddingeventId: biddingID,
        };
        const res = await axios.patch(`${baseURL}/api/endbid`, body);
        expect(res.data.msg).to.eql("Bidding Stopped");
      });
    });
  });

  xdescribe("FARMER HISTORY", () => {
    describe("View Sell History", () => {
      it("GET /api/farmerhistory", async () => {
        const res = await axios.get(`${baseURL}/api/farmerhistory`);
        expect(res.data).to.be.an("array");
      });
    });
  });

  describe("FARMER PROFILE", () => {
    describe("View Profile", () => {
      it("GET /api/farmerprofile", async () => {
        const res = await axios.get(`${baseURL}/api/farmerprofile`);
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
