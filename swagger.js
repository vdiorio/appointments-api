const app = require("./app");

const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./router.js"];

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const doc = {
  info: {
    version: "1.0.0",
    title: "Appointments API",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "appointments-api-ur36.onrender.com",
  basePath: "/",
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Endpoints",
      description: "Endpoints para gerenciamento de consultas médicas",
    },
  ],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
  },
  definitions: {
    UserCredentials: {
      email: "email@email.com",
      password: "1418",
    },
    AddUser: {
      name: "Fulano de Tal",
      email: "email@email.com",
      password: "1418",
      role: "ADMIN", // ADMIN ou USER
    },
    UserDomain: {
      id: "3961048c-9242-45a2-92b3-11d24023cd5b",
      name: "Fulano de Tal",
      role: "USER",
    },
    AuthUser: {
      user: {
        name: "Fulano de Tal",
        password: "1418",
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTlhMzQ4OS0wMjUyLTQyOWQtOTI2YS02OWFlYTdhYWMzM2EiLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTcxNTE5NjYwOSwiZXhwIjoxNzE1MjAzODA5fQ.SAwWd63TQjr3oZSD32APCCeu5LiZXNmmQEVCCLCLgaY",
    },
    Doctor: {
      id: "3961048c-9242-45a2-92b3-11d24023cd5b",
      name: "Victor Schwartz",
      specialty: "Cardiologista",
      CRM: "12345678",
      photoUrl: "https://example.com/photo.jpg",
      hospital: "Santa casa",
      address: " Rua 1, 123, Centers, São Paulo, SP, Brasil",
      modalty: "online",
      appointments: [
        {
          date: "2024-05-06",
          time: "15:00",
        },
      ],
    },
    AddDoctor: {
      name: "Victor Schwartz",
      specialty: "Cardiologista",
      CRM: "12345678",
      hospital: "Santa casa",
      address: " Rua 1, 123, Centro, São Paulo, SP, Brasil",
      modalty: "online",
      photoUrl: "https://example.com/photo.jpg",
    },
    DoctorDomain: {
      id: "3961048c-9242-45a2-92b3-11d24023cd5b",
      name: "Victor Schwartz",
      specialty: "Cardiologista",
      CRM: "12345678",
      photoUrl: "https://example.com/photo.jpg",
    },
    Appointment: {
      id: "3961048c-9242-45a2-92b3-11d24023cd5b",
      date: "2024-05-06",
      time: "15:00",
      status: "SCHEDULED",
      userId: "3961048c-9242-45a2-92b3-11d24023cd5b",
      doctorId: "3961048c-9242-45a2-92b3-11d24023cd5b",
      user: { $ref: "#/definitions/UserDomain" },
      doctor: { $ref: "#/definitions/DoctorDomain" },
    },
    AddAppointment: {
      doctorId: "3961048c-9242-45a2-92b3-11d24023cd5b",
      date: "2024-05-06",
      time: "15:00",
    },
    UpdateAppointment: {
      date: "2024-05-06",
      time: "15:00",
      status: "SCHEDULED",
      userId: "3961048c-9242-45a2-92b3-11d24023cd5b",
      doctorId: "3961048c-9242-45a2-92b3-11d24023cd5b",
    },
    Appointments: [{ $ref: "#/definitions/Appointment" }],
    Users: [{ $ref: "#/definitions/UserDomain" }],
    Doctors: [{ $ref: "#/definitions/Doctor" }],
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./app");
});
