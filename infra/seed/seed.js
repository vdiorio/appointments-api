const Appointment = require("../../modules/appointments/models/appointment.model");
const Doctor = require("../../modules/doctors/models/doctors.model");
const User = require("../../modules/users/models/user.model");
const sequelize = require("../db");
const seedData = require("./seed-data");

async function seedDatabase() {
  try {
    // Sync the database (use { force: true } in dev environments to reset tables)
    await sequelize.sync({ force: true });

    console.log("Seeding Users...");
    const users = await User.bulkCreate(seedData.users);

    console.log("Seeding Doctors...");
    const doctors = await Doctor.bulkCreate(seedData.doctors);

    console.log("Seeding Appointments...");
    // Dynamically assign userId and doctorId
    const appointments = seedData.appointments.map((appointment, index) => ({
      ...appointment,
      userId: users[index % users.length].id, // Assign users in a round-robin fashion
      doctorId: doctors[index % doctors.length].id, // Assign doctors in a round-robin fashion
    }));

    await Appointment.bulkCreate(appointments);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

// Run the seed script directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
