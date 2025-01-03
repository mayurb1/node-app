// using sequelize to connect to the database and it's configuration
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node study", "root", "indianic", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// using row mysql queries to connect to the database and it's configuration
// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node study",
//   password: "indianic",
// });

// module.exports = pool.promise();
