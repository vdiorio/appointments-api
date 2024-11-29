const Sequelize = require("sequelize");
const database = require("../../../infra/db");
const User = require("../../users/models/user.model");
const Doctor = require("../../doctors/models/doctors.model");

const Appointment = database.define("Appointment", {
  id: {
    type: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: "SCHEDULED",
    validate: {
      isIn: [["SCHEDULED", "CANCELLED", "COMPLETED"]],
    },
  },
});

Appointment.belongsTo(User, { as: "user", foreignKey: "userId" }); // User who made the appointment
Appointment.belongsTo(Doctor, { as: "doctor", foreignKey: "doctorId" }); // Doctor who will be treating the patient

module.exports = Appointment;
