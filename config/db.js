const config = require("config");
const Sequelize = require("sequelize");
const db = config.get("mySqlURI");

const sequelize = new Sequelize(db, {
  define: {
    freezeTableName: true,
  },
});
// const sequelize = new Sequelize("vikrawin", "vikraWinAdmin", "vikraWin@123", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   define: {
//     freezeTableName: true,
//   },
// });

module.exports = sequelize;
