const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const { DataTypes } = Sequelize;

const BiddingEvent = sequelize.define("biddingevent", {
  biddingeventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cropName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sellQuantity: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  basePrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  isSold: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  currentBid: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  currentBidderName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sellDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createrFarmerName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = BiddingEvent;
