const Workout = require('../models/Workout.js');

module.exports = (app) => {

    // get past workouts
    app.get('/api/workouts', (req, res) => {
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        });
    });
    // post new workout
    app.post('/api/workouts', (req, res) => {
        Workout.create({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // update existing workout
    app.put('/api/workouts/:id', ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            {$push: { exercise: body } },
            { new: true, runValidators: true }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Get Workout data for dashboard
    app.get('/api/workouts/range', (req, res) => {
        Workout.find()
            .limit(7)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
};