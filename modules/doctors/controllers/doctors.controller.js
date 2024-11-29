const doctorsRepository = require("../repositories/doctors.repository");

class DoctorsController {
  async findAll(req, res) {
    // #swagger.tags = ["Doctors"]
    // #swagger.description = "Endpoint para listagem médicos."

    try {
      /* #swagger.responses[201] = { 
          schema: { $ref: "#/definitions/Doctors" },
          description: "Lista de médicos encontrada." 
      } */
      const doctors = await doctorsRepository.findAll();
      const mappedDoctors = doctors.map((doctor) => {
        return {
          id: doctor.id,
          name: doctor.name,
          CRM: doctor.CRM,
          specialty: doctor.specialty,
          appointments: doctor.Appointments.map((appointment) => ({
            date: appointment.date,
            time: appointment.time,
          })),
        };
      });

      return res.status(200).json(mappedDoctors);
    } catch (error) {
      /* #swagger.responses[500] = { 
          description: "Problemas com o servidor." 
      } */
      return res.status(500).json(error);
    }
  }
}

module.exports = new DoctorsController();
