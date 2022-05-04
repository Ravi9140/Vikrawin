const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const { DataTypes } = Sequelize;

const Bidding = sequelize.define(
  "bidding",
  {
    biddingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    biddingAmount: {
      type: DataTypes.DOUBLE,
    },
    biddingDate: {
      type: DataTypes.DATE,
    },

    biddingStatus: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Bidding;
