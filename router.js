const { Router } = require("express");
const appointmentsRouter = require("./modules/appointments/routes/appointments.routes");
const authRouter = require("./modules/auth/routes/auth.routes");
const usersRouter = require("./modules/users/routes/users.routes");
const doctorsRouter = require("./modules/doctors/routes/doctors.routes");

const router = Router();

router.use("/appointments", appointmentsRouter);
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/doctors", doctorsRouter);

module.exports = router;
