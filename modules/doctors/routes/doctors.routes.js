const { Router } = require("express");
const doctorsController = require("../controllers/doctors.controller");
const verifyToken = require("../../../middlewares/verify-token");

const doctorsRouter = Router();

doctorsRouter.get("/", verifyToken, doctorsController.findAll);
doctorsRouter.post("/", verifyToken, doctorsController.create);
doctorsRouter.put("/:id", verifyToken, doctorsController.update);
doctorsRouter.delete("/:id", verifyToken, doctorsController.delete);

module.exports = doctorsRouter;
