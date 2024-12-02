module.exports = {
  users: [
    {
      id: "17e3f4a7-8c14-44d3-9295-9de5f1d9f056",
      name: "Administrador",
      email: "email@email.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5cbb2ebc-342f-4e95-a690-0f509e8cc048",
      name: "Alice Johnson",
      email: "alice@example.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9fa94d29-5f79-48a3-bc34-d27464d902cd",
      name: "Bob Smith",
      email: "bob@example.com",
      password: "$2a$10$wZn8wfotmf4ZlD4If4N.O.LKEP1wtZHSew/iReCth9B21zg96VO72",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  doctors: [
    {
      id: "ec10d2c1-20d0-4347-96be-d58b6c8f0c9b",
      name: "Dr. Gregory House",
      specialty: "Diagnostics",
      CRM: "CRM12345",
      hospital: "General Hospital",
      photoUrl: "https://example.com/photo.jpg",
      address: "123 Main Street, City, State, Country",
      modalty: "online",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "b7ad52cd-9370-4e8e-9a39-473278b8cf41",
      name: "Dr. Meredith Grey",
      specialty: "General Surgery",
      CRM: "CRM67890",
      hospital: "General Hospital",
      photoUrl: "https://example.com/photo.jpg",
      address: "123 Main Street, City, State, Country",
      modalty: "online",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  appointments: [
    {
      id: "a0c52332-1f13-4b9a-830b-f3fa47dc6f6e",
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
      id: "6c96c7f1-caa6-4d82-b0b3-228ddc2d928f",
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
