const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const { DataTypes } = Sequelize;
const Bidder = sequelize.define(
  "bidder",
  {
    bidderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    bidderName: {
      type: DataTypes.STRING,
    },
    bidderEmail: {
      type: DataTypes.STRING,
      unique: true,
    },
    bidderContact: {
      type: DataTypes.STRING,
      unique: true,
    },
    bidderAddress: {
      type: DataTypes.STRING,
    },
    bidderCity: {
      type: DataTypes.STRING,
    },
    bidderState: {
      type: DataTypes.STRING,
    },
    bidderPinCode: {
      type: DataTypes.INTEGER,
    },
    bidderAccountNo: {
      type: DataTypes.DOUBLE,
      unique: true,
    },
    bidderAdhaarNo: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    bidderAdhaarCard: {
      type: DataTypes.STRING,
    },
    bidderPanNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    bidderPanCard: {
      type: DataTypes.STRING,
    },
    bidderPassword: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Bidder;
