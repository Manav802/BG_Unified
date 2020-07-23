const mysql = require("mysql");
const sequelize = require("./connectionDB");

//exporting the datbase conncetivity
exports.connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
