const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const { DataTypes } = Sequelize;

const BiddingEvent = sequelize.define(
  "biddingevent",
  {
    biddingeventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sellQuantity: {
      type: DataTypes.DOUBLE,
    },
    basePrice: {
      type: DataTypes.DOUBLE,
    },
    fertilizerType: {
      type: DataTypes.STRING,
    },
    isSold: {
      type: DataTypes.BOOLEAN,
      default: false,
    },

    soilPhCertificate: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = BiddingEvent;
