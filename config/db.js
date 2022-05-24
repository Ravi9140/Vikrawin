const config = require("config");
const Sequelize = require("sequelize");
const db = config.get("mySqlURI");

const sequelize = new Sequelize(db, {
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: function (field, next) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+05:30",
});

// const sequelize = new Sequelize("sql6493999", "sql6493999", "zF1IyVcDxM", {
//   host: "sql6.freemysqlhosting.net",
//   port: 3306,
//   dialect: "mysql",
//   define: {
//     freezeTableName: true,
//   },
//   dialectOptions: {
//     useUTC: false, //for reading from database
//     dateStrings: true,
//     typeCast: function (field, next) {
//       // for reading from database
//       if (field.type === "DATETIME") {
//         return field.string();
//       }
//       return next();
//     },
//   },
//   timezone: "+05:30",
// });

module.exports = sequelize;
