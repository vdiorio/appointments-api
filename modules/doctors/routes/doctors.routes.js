const { Router } = require("express");
const doctorsController = require("../controllers/doctors.controller");
const verifyToken = require("../../../middlewares/verify-token");

const doctorsRouter = Router();

doctorsRouter.get("/", verifyToken, doctorsController.findAll);

module.exports = doctorsRouter;
