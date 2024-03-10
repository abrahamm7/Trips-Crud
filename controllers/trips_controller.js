const express = require("express");
const sql = require("mssql/msnodesqlv8");
const app = express();

app.get("/", async (req, res) => {
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
