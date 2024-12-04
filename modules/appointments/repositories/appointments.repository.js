const database = require("../../../infra/db");
const models = require("../../../infra/models");
const { v4: uuidv4 } = require("uuid");

const { User, Doctor, Appointment } = models;

class AppointmentsRepository {
  async findAll() {
    await database.sync();
    const appointments = await Appointment.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name"],
        },
        {
          model: Doctor,
          as: "doctor",
          attributes: [
            "id",
            "name",
            "specialty",
            "CRM",
            "hospital",
            "modalty",
            "address",
            "photoUrl",
          ],
        },
      ],
    });
    return appointments;
  }

  async findAllByUserId(userId) {
    await database.sync();
    const appointments = await Appointment.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Doctor,
          as: "doctor",
        },
      ],
    });
    return appointments;
  }

  async findOne(id) {
    await database.sync();
    const appointment = await Appointment.findOne({
      where: {
        id,
      },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });
    return appointment;
  }

  async create(appointment) {
    await database.sync();
    return await Appointment.create({
      ...appointment,
      id: uuidv4(),
    });
  }

  async update(id, appointment) {
    await database.sync();
    return await Appointment.update(appointment, {
      where: {
        id,
      },
    });
  }

  async delete(id) {
    await database.sync();
    await Appointment.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = new AppointmentsRepository();
