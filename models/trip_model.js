const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Trips = sequelize.define("Trips", {
    TripID: {
      type: sequelize.INTEGER,
    },
    Destination: {
      type: sequelize.STRING,
    },
    StartDate: {
      type: sequelize.DATEONLY,
    },
    EndDate: {
      type: sequelize.DATEONLY,
    },
    Description: {
      type: sequelize.STRING,
    },
  });
  return Trips;
};
