const Sequelize = require("sequelize");
const sequelize = require("../../../infra/db");

const Doctor = sequelize.define("Doctor", {
  id: {
    type: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialty: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  CRM: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Doctor.associate = function (models) {
  Doctor.hasMany(models.Appointment, {
    foreignKey: "doctorId",
  });
};

module.exports = Doctor;
