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
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPW,
  database: process.env.MYSQLDB
});

let dummydata = [
	{
		category: 'fake_data',
		body_part: 'fake_data',
    exercise_name: 'fake_data'
	}
]



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/exercise', (req, res) => {
//   con.query('SELECT * from exercise LIMIT 1', (err, rows) => {
//     if(err) throw err;
//     console.log('The data from users table are: \n', rows);
//     con.end();
//     res.send(rows);

// });

res.send(dummydata);
})

app.get('/bodypart', (req, res) => {
  res.send('bodypart!')
})


module.exports = app;
