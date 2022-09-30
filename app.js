const express = require('express');
const path = require('path');
const logger = require('morgan');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/exercise', (req, res) => {
  res.send('exercise')
})

app.get('/bodypart', (req, res) => {
  res.send('bodypart!')
})


module.exports = app;
