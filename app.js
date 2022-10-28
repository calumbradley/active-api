const express = require('express');
const path = require('path');
const logger = require('morgan');
const mysql = require('mysql');

const app = express();

// const exercise = require("./.db/exercise");
// const category = require("./.db/category");
// const bodypart = require("./.db/bodypart");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config()

const con = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPW,
  database: process.env.MYSQLDB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/exercise', (req, res) => {
  con.query('SELECT * from exercise;', (err, rows) => {
    if (err) throw err;
    // con.end();
    res.send(rows);
  });
})

app.get('/bodypart', (req, res) => {
  con.query('SELECT * from bodypart;', (err, rows) => {
    if (err) throw err;
    // con.end();
    res.send(rows)
  })
})

app.get('/category', (req, res) => {
  con.query('SELECT * from category;', (err, rows) => {
    if (err) throw err;
    // con.end();
    res.send(rows)
  })
})

module.exports = app;
