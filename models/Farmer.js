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
    farmerAdhaarNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    farmerPanNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    farmerPassword: {
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

module.exports = Farmer;
