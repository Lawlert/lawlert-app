const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Senator = require("./models/senator")

const app = express();

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

mongoose.connect(config.database.prefix + config.database.username + ':' + config.database.password + config.database.domain + config.database.db + config.database.params)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection to database failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/senators", (req, res, next) => {
  Senator.find()
  .then(documents => {
    res.status(200).json({
      message: "Senators fetched successfully!",
      senators: documents
    });
  });

});

// Api used to load senators
// const request = require('request');

// app.get("/api/loadSenators", (req, res, next) => {
//   request({
//     headers: {
//       'X-API-Key': 'T7QidckaAMOLEKU1fTCZMcLRgPlXrC2ZLeA7txpD'
//     },
//     uri: 'https://api.propublica.org/congress/v1/115/senate/members.json',
//     method: 'GET',
//     json : true
//   }, (err, res, body) => {
// 		body.results[0].members.forEach(function(element){
//       const senator = new Senator({
//         ...element
//       });
//       senator.save();
// 			console.log(element.first_name + " " + element.last_name)
// 		});
//   if (err) { return console.log(err); }
//   });
// });

module.exports = app;
