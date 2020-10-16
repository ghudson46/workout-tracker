const mongoose = require('mongoose');
const exercises = require('./Exercise')

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        exercises
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;