const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const db = require('./models/Exercise');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', { useNewUrlParser: true });


// sudo code

/*
-need 2 models??? (workout and exercise)
-each workout will have a unique id to populate exercises
-each exercise will have type, a name and a weight or time based on type


need to 
-create a new workout
-open an existing workout
-view one workout
-view all workouts
-view one exercise
-view all exercies
-populate workouts with all exercises
-add the total weight of a workout and use data to populate tables and graphs


look at library example 
library = workout 

book = exercise

title = exercise name
author = weight
type can be a boolean with true = resistance and false = cardio, or can just be a string 


*/


  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  })
