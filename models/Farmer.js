const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const { DataTypes } = Sequelize;
const Farmer = sequelize.define(
  "farmer",
  {
    farmerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    farmerName: {
      type: DataTypes.STRING,
    },
    farmerEmail: {
      type: DataTypes.STRING,
      unique: true,
    },
    farmerContact: {
      type: DataTypes.STRING,
      unique: true,
    },
    farmerLandArea: {
      type: DataTypes.DOUBLE,
    },
    farmerAddress: {
      type: DataTypes.STRING,
    },
    farmerCity: {
      type: DataTypes.STRING,
    },
    farmerState: {
      type: DataTypes.STRING,
    },
    farmerPinCode: {
      type: DataTypes.INTEGER,
    },
    farmerAccountNo: {
      type: DataTypes.DOUBLE,
      unique: true,
    },
    farmerAdhaarNo: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    farmerAdhaarCard: {
      type: DataTypes.STRING,
    },
    farmerPanNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    farmerPanCard: {
      type: DataTypes.STRING,
    },
    farmerPassword: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Farmer;
