const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  values: [
    {
      type: Schema.Types.ObjectId,
      ref: "Value"
    }
  ]
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;