const express = require("express");

// Import Database Model
const sequelize = require("./config/db");
const Bidder = require("./models/Bidder");
const Bidding = require("./models/Bidding");
const BiddingEvent = require("./models/BiddingEvent");
const Crop = require("./models/Crop");
const Farmer = require("./models/Farmer");
const app = express();

// Init Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes

app.use("/api/farmer", require("./routes/api/farmer"));
app.use("/api/farmerauth", require("./routes/api/farmerauth"));
app.use("/api/bidder", require("./routes/api/bidder"));
app.use("/api/bidderauth", require("./routes/api/bidderauth"));

app.use("/api/crop", require("./routes/api/crop"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);

// Define Association
// 1:M

Farmer.hasMany(BiddingEvent, { foreignKey: "farmerId", onDelete: "CASCADE" });
BiddingEvent.belongsTo(Farmer, { foreignKey: "farmerId", onDelete: "CASCADE" });
Farmer.hasMany(Bidding, { foreignKey: "farmerId", onDelete: "CASCADE" });
Bidding.belongsTo(Farmer, { foreignKey: "farmerId", onDelete: "CASCADE" });

Crop.hasMany(BiddingEvent, { foreignKey: "cropId", onDelete: "CASCADE" });
BiddingEvent.belongsTo(Crop, { foreignKey: "cropId", onDelete: "CASCADE" });

// 1:1
BiddingEvent.hasOne(Bidding, {
  foreignKey: "biddingeventId",
  onDelete: "CASCADE",
});
Bidding.belongsTo(BiddingEvent, {
  foreignKey: "biddingeventId",
  onDelete: "CASCADE",
});

// M: M
Bidding.belongsToMany(Bidder, { through: "winner", timestamps: false });
Bidder.belongsToMany(Bidding, { through: "winner", timestamps: false });

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     //working with the tables
//     console.log("Table and Model Updated Successfully");
//   })
//   .catch((err) => console.log(err));
