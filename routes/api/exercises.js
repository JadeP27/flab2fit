const router = require('express').Router();
var exercise_controller = require('../../controllers/exercise_controller');

router.route('/')
        .get(exercise_controller.getWorkouts)
        .post(exercise_controller.createWorkout)

router.get("/range", exercise_controller.getWorkouts)

router.put("/:id", exercise_controller.updateWorkout)

router.delete("/delete/:id", exercise_controller.deleteWorkout)


module.exports = router;