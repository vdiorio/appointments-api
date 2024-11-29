const database = require("../../../infra/db");
const models = require("../../../infra/models");
const { v4: uuidv4 } = require("uuid");

const { Doctor, Appointment } = models;

class DoctorsRepository {
  async findAll() {
    await database.sync();
    return await Doctor.findAll({
      include: [
        {
          model: Appointment,
        },
      ],
    });
  }

  async create(doctor) {
    await database.sync();
    doctor.id = uuidv4();
    await Doctor.create(doctor);
  }
}

module.exports = new DoctorsRepository();
