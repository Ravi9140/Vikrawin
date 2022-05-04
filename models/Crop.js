const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const { DataTypes } = Sequelize;

const Crop = sequelize.define(
  "crop",
  {
    cropId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    cropName: {
      type: DataTypes.STRING,
      unique: true,
    },

    cropType: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Crop;
