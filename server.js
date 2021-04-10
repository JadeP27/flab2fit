const express = require("express");

const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Routes
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});