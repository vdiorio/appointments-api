const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./router.js"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Appointments API",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
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
      password: "123@4",
    },
    AddUser: {
      name: "Fulano de Tal",
      email: "email@email.com",
      password: "123@4",
      role: "ADMIN", // ADMIN ou USER
    },
    UserDomain: {
      id: "3961048c-9242-45a2-92b3-11d24023cd5b",
      name: "Fulano de Tal",
    },
    AuthUser: {
      user: {
        name: "Fulano de Tal",
        email: "email@email.com",
        password: "123@4",
        role: "ADMIN", // ADMIN ou USER
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTlhMzQ4OS0wMjUyLTQyOWQtOTI2YS02OWFlYTdhYWMzM2EiLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTcxNTE5NjYwOSwiZXhwIjoxNzE1MjAzODA5fQ.SAwWd63TQjr3oZSD32APCCeu5LiZXNmmQEVCCLCLgaY",
    },
    Appointment: {
      id: "3961048c-9242-45a2-92b3-11d24023cd5b",
      specialty: "Cardiologista",
      doctor: "Victor Schwartz",
      date: "2024-05-06",
      time: "15:00",
      obs: "Dores constantes",
    },
    AddAppointment: {
      specialty: "Cardiologista",
      doctor: "Victor Schwartz",
      date: "2024-05-06",
      time: "15:00",
      obs: "Dores constantes",
    },
    Appointments: [{ $ref: "#/definitions/Appointment" }],
    Users: [{ $ref: "#/definitions/UserDomain" }],
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./app");
});
