require("dotenv").config();
const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
