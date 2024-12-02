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
        const doc = {
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialty,
          CRM: doctor.CRM,
          photoUrl: doctor.photoUrl,
          address: doctor.address,
          modalty: doctor.modalty,
          hospital: doctor.hospital,
          appointments: doctor.Appointments.map((appointment) => ({
            date: appointment.date,
            time: appointment.time,
          })),
        };
        console.log(doc);
        return doc;
      });

      return res.status(200).json(mappedDoctors);
    } catch (error) {
      /* #swagger.responses[500] = { 
          description: "Problemas com o servidor." 
      } */
      return res.status(500).json(error);
    }
  }

  async create(req, res) {
    // #swagger.tags = ["Doctors"]
    // #swagger.description = "Endpoint para criar um médico."

    /* #swagger.parameters['Doctor'] = {
        in: 'body',
        description: "Adicionando um novo médico.",
        schema: { $ref: "#/definitions/AddDoctor" }
    } */
    const doctor = req.body;

    try {
      /* #swagger.responses[201] = {
          description: "Médico cadastrado."
      } */
      await doctorsRepository.create(doctor);
      return res.status(201).json();
    } catch (error) {
      /* #swagger.responses[500] = { 
          description: "Problemas com o servidor." 
      } */
      return res.status(500).json(error);
    }
  }

  async update(req, res) {
    // #swagger.tags = ["Doctors"]
    // #swagger.description = "Endpoint para atualizar um médico."

    // #swagger.parameters['id'] = { description: "Id do médico" }
    const { id } = req.params;

    /* #swagger.parameters['body'] = { 
        in: 'body',
        description: "Atualizando um médico.",
        schema: { $ref: "#/definitions/AddDoctor" }
    } */
    const doctor = req.body;

    try {
      /* #swagger.responses[204] = { 
          description: "Médico atualizado com sucesso." 
      } */
      await doctorsRepository.update(id, doctor);
      return res.status(204).json();
    } catch (error) {
      /* #swagger.responses[500] = {
          description: "Problemas com o servidor."
      } */
      return res.status(500).json(error);
    }
  }

  async delete(req, res) {
    // #swagger.tags = ["Doctors"]
    // #swagger.description = "Endpoint para remover um medico."

    // #swagger.parameters['id'] = { description: "Id do médico" }
    const { id } = req.params;

    try {
      /* #swagger.responses[204] = { 
          description: "Médico removido com sucesso." 
      } */
      await doctorsRepository.delete(id);
      return res.status(204).json();
    } catch (error) {
      /* #swagger.responses[500] = { 
          description: "Problemas com o servidor." 
      } */
      return res.status(500).json(error);
    }
  }
}

module.exports = new DoctorsController();
