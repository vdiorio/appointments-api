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
  },
  CRM: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hospital: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modalty: {
    type: Sequelize.STRING,
    allowNull: false,
    default: "online",
  },
  photoUrl: {
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
