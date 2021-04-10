const router = require("express").Router();
const exercisesRoutes = require("./exercises")

router.use("/workouts", exercisesRoutes)

module.exports = router;