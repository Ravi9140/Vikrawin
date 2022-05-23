const config = require("config");
const Sequelize = require("sequelize");
const db = config.get("mySqlURI");

const sequelize = new Sequelize(db, {
  define: {
    freezeTableName: true,
  },
});

// const sequelize = new Sequelize("sql6493999", "sql6493999", "zF1IyVcDxM", {
//   host: "sql6.freemysqlhosting.net",
//   port: 3306,
//   dialect: "mysql",
//   define: {
//     freezeTableName: true,
//   },
// });

module.exports = sequelize;
