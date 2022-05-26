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
    bidderAdhaarNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    bidderPanNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    bidderPassword: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Bidder;
