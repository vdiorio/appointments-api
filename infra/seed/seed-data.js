const { v4: uuidv4 } = require("uuid");

module.exports = {
  users: [
    {
      id: uuidv4(),
      name: "Bora time",
      email: "email@email.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: "Alice Johnson",
      email: "alice@example.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: "Bob Smith",
      email: "bob@example.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: "Dr. Emily Clark",
      email: "emily@example.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "DOCTOR",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  doctors: [
    {
      id: uuidv4(),
      name: "Dr. Gregory House",
      specialty: "Diagnostics",
      CRM: "CRM12345",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: "Dr. Meredith Grey",
      specialty: "General Surgery",
      CRM: "CRM67890",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  appointments: [
    {
      id: uuidv4(),
      specialty: "Diagnostics",
      date: new Date(2024, 11, 1), // Example date: December 1, 2024
      time: "10:30:00",
      status: "SCHEDULED",
      userId: null, // Will be set dynamically
      doctorId: null, // Will be set dynamically
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      specialty: "General Surgery",
      date: new Date(2024, 11, 2),
      time: "14:00:00",
      status: "SCHEDULED",
      userId: null, // Will be set dynamically
      doctorId: null, // Will be set dynamically
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
