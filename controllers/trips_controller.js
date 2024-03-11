const express = require("express");
require("dotenv").config();
const sql = require("mssql/msnodesqlv8");
const trip_model = require("../models/trip_model.js");
const app = express();

app.listen(3000, () => console.log("Listening on port 3000"));

app.get("/", async (req, res) => {
  res.send(`Database name is ${process.env.DB_NAME}`);
});

app.get("/trips", async (req, res) => {
  // config for your database
  var connection = new sql.ConnectionPool({
    database: "TripsDB",
    server: "LAPTOP-3Q354RTQ\\SQLEXPRESS",
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
    },
  });
  connection.connect().then(() => {
    connection
      .request()
      .query("SELECT * FROM Trips")
      .then((result) => {
        res.send(result.recordset);
      });
  });
});

app.post("/addTrip", (req, res) => {
  var connection = new sql.ConnectionPool({
    database: "TripsDB",
    server: "LAPTOP-3Q354RTQ\\SQLEXPRESS",
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
    },
  });
});
