const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Senator = require("./models/senator");
const Bill = require("./models/bill");

const app = express();

const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];

mongoose
  .connect(
    config.database.prefix +
      config.database.username +
      ":" +
      config.database.password +
      config.database.domain +
      config.database.db +
      config.database.params
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection to database failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static(path.join("backend/images")));

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
  Senator.find().then(documents => {
    res.status(200).json({
      message: "Senators fetched successfully!",
      senators: documents
    });
  });
});

app.get("/api/bills", (req, res, next) => {
  Bill.find().then(documents => {
    res.status(200).json({
      message: "Senators fetched successfully!",
      bills: documents
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
//   }, (err, response, body) => {
//     Senator.deleteMany({}, () => {
//       body.results[0].members.forEach(function(element){
//         const senator = new Senator({
//           ...element,
//           image_link: 'https://theunitedstates.io/images/congress/450x550/'+ element.id +'.jpg'
//         });
//         senator.save();
//         console.log(element.first_name + " " + element.last_name)
//       });
//       res.status(200).json({
//         message: "Senators loaded successfully!"
//       });
//     });
//   if (err) { return console.log(err); }
//   });
// });

// Api used to load recent bills
// const request = require("request");

// app.get("/api/loadRecentBills", (req, res, next) => {
//   request(
//     {
//       headers: {
//         "X-API-Key": "T7QidckaAMOLEKU1fTCZMcLRgPlXrC2ZLeA7txpD"
//       },
//       uri:
//         "https://api.propublica.org/congress/v1/115/senate/bills/active.json",
//       method: "GET",
//       json: true
//     },
//     (err, response, body) => {
//       body.results[0].bills.forEach(function(element) {
//         const bill = new Bill({
//           ...element
//         });
//         bill.save();
//         console.log(element.bill_id);
//       });
//       res.status(200).json({
//         message: "Bills loaded successfully!"
//       });
//       if (err) {
//         return console.log(err);
//       }
//     }
//   );
// });

module.exports = app;
