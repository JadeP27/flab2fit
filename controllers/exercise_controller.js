const db = require('../models');

module.exports = {
getWorkouts:  (req, res) => {
    db.Workouts.find({})
      .then(dbWorkout => {
      dbWorkout.forEach(workout => {
        let total = 0;

      })
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
},
createWorkout: (req, res) => {
    db.Workouts.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
},
updateWorkout: (req, res) => {
    console.log(req.body)
    db.Workouts.findAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }} , { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
},
deleteWorkout: (req, res) => {
    db.Workouts.remove({_id: req.params.id})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
}

}
