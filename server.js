const express = require("express");
const path = require("path");

// Import Database Model
const sequelize = require("./config/db");
const Bidder = require("./models/Bidder");
const BiddingEvent = require("./models/BiddingEvent");
const Farmer = require("./models/Farmer");
const app = express();

// Init Middleware

app.use(express.json({ extended: false }));

//Cors Origin set
app.use(
  cors({
    origin: ["https://vikrawin.netlify.app/", "http://localhost:3000"],
  })
);

// Allow cross origin requests
// app.use(function (request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req, res) => res.send("API Running"));

// Define routes

// Farmer
app.use("/api/farmer", require("./routes/api/farmer"));
app.use("/api/farmerauth", require("./routes/api/farmerauth"));
app.use("/api/createauction", require("./routes/api/biddingEvent"));
app.use("/api/mycrops", require("./routes/api/myCrops"));
app.use("/api/farmerhistory", require("./routes/api/farmerHistory"));
app.use("/api/farmerprofile", require("./routes/api/farmerProfile"));

// Bidder
app.use("/api/bidder", require("./routes/api/bidder"));
app.use("/api/bidderauth", require("./routes/api/bidderauth"));
app.use("/api/registerauction", require("./routes/api/registerAuction"));
app.use("/api/availableauctions", require("./routes/api/availableAuctions"));
app.use("/api/bidderhistory", require("./routes/api/bidderHistory"));
app.use("/api/bidderprofile", require("./routes/api/bidderProfile"));

app.use("/api/registeredbids", require("./routes/api/registeredBids"));
app.use("/api/placebid", require("./routes/api/placeBid"));
app.use("/api/endbid", require("./routes/api/endBidding"));

// SMS
app.use("/api/send", require("./routes/api/sms"));

// email
app.use("/api/emailsend", require("./routes/api/emailNotification"));

// Password
app.use("/api/reset", require("./routes/api/resetPassword"));
app.use("/api/bidder-reset", require("./routes/api/bidderResetPassword"));

// OTP verification
app.use("/api/sendotp", require("./routes/api/sendOtp"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);

// Define Association
//Farmer - BiddingEvent     1 to M relationship
Farmer.hasMany(BiddingEvent, {
  foreignKey: "createrId",
  onDelete: "CASCADE",
});
BiddingEvent.belongsTo(Farmer, {
  foreignKey: "createrId",
  onDelete: "CASCADE",
});

//Bidder - BiddingEvent     1 to M relationship
Bidder.hasMany(BiddingEvent, {
  foreignKey: "currentBidderId",
  allowNull: true,
  onDelete: "CASCADE",
});
BiddingEvent.belongsTo(Bidder, {
  foreignKey: "currentBidderId",
  allowNull: true,
  onDelete: "CASCADE",
});

//Bidder - BiddingEvent M - M to relationship
Bidder.belongsToMany(BiddingEvent, {
  through: "registeredbids",
  foreignKey: "bidderId",
  onDelete: "CASCADE",
});
BiddingEvent.belongsToMany(Bidder, {
  through: "registeredbids",
  foreignKey: "biddingId",
  onDelete: "CASCADE",
});

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     //working with the tables
//     console.log("Table and Model Updated Successfully");
//   })
//   .catch((err) =>
//     console.log(
//       "Database is Under Maintainance or max_connection limit is reached"
//     )
//   );
