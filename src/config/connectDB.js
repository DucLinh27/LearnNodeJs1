const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("manageemployee", "root", null, {
  host: "127.0.0.1",
  port: "3307",
  dialect: "mysql",
  logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("connectDB MySQL successfully!")
    } catch (e) {
        console.log("connect failed", e);
    }
};
// // simple query
// sequelize.query(
//     'SELECT * FROM `manageemployee`',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
module.exports = connectDB;
