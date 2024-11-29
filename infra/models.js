const User = require("../modules/users/models/user.model");
const Doctor = require("../modules/doctors/models/doctors.model");
const Appointment = require("../modules/appointments/models/appointment.model");
const sequelize = require("./db");

const models = {
  User,
  Doctor,
  Appointment,
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

Object.keys(models).forEach((modelName) => {
  models[modelName].sync();
});

module.exports = models;
