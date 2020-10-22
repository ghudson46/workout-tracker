//API Routes

// Dependencies
const router = require("express").Router();
const Workout = require("../models/workout.js");

// create workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then((data) => { res.json(data) })
  .catch((err) => { res.json(err) });
});

// update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true})
  .then((data) => { res.json(data) })
  .catch((err) => { res.json(err) });
});

// find workout
router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then((data) => { res.json(data) })
  .catch((err) => { res.json(err) });
});

// find workout range (7 days) for stats
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .limit(7)
  .then((data) => { res.json(data) })
  .catch((err) => { res.json(err) });
});

module.exports = router;

