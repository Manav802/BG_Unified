const Sequelize = require("sequelize");

//exporting the sequelize
const sequelize = new Sequelize("bgunified", "bg", "Password@123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

//exporting the connection
module.exports = sequelize;
