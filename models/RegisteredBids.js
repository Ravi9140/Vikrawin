const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const RegisteredBids = sequelize.define("registeredbids", {});

module.exports = RegisteredBids;
