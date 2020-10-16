const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    enum: ['cardio', 'resistance'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: () => {
      return this.type === 'cardio';
    }
  },
  weight: {
    type: Number,
    required: () => {
      return this.type === 'resistence';
    }
  },
  reps: {
    type: Number,
    required: () => {
      return this.type === 'resistence';
    }
  },
  sets: {
    type: Number,
    required: () => {
      return this.type === 'resistence';
    }
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;