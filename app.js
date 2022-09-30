const express = require('express');
const path = require('path');
const logger = require('morgan');
const mysql = require('mysql');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config()

const con = mysql.createConnection({
  host: "active-api.ckgwmrigl9vq.us-east-1.rds.amazonaws.com",
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPW
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/exercise', (req, res) => {
  res.send('exercise')
})

app.get('/bodypart', (req, res) => {
  res.send('bodypart!')
})


module.exports = app;
