// dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const db = require('./models');

// Express
const PORT = 3001;
const app = express();

// Morgan Logger
app.use(logger("dev"));

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useUnifiedModify: false
}, err => console.log(err)
);

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)


app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
})
