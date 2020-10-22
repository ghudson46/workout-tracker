const router = require('express').Router();
const Workout = require('../models/workout.js');

 // create a workout
 router.post('/api/workouts', (req, res) => {
     Workout.create({})
     .then(data => {
         res.json(data);
     })
     .catch(error => {
         res.json(error);
     });
 });

 // update a workout 
 router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercise: body } }, { new: true})
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json(error);
    });
 });

 // find workout
 router.get('/api/workouts', (req, res) => {
     Workout.find()
     .then(data => {
         res.json(data);
     })
     .catch(error => {
         res.json(error);
     });
 });

 // find 7 day workout range for dashboard
 router.get('/api/workouts/range', (req, res) => {
     Workout.find({})
     .limit(7)
     .then(data => {
         res.json(data);
     })
     .catch(error => {
         res.json(error);
     });
 });

 module.exports = router;

