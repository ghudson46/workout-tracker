const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    require: true
  },
  sets: {
    type: Number,
    require: true
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;