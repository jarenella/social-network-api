const express = require('express');
const mongodb = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const userSchema = require('./schemas/user');

const app = express();
const port = 3001 || process.port.env;

const connectionStringURI = `mongodb://127.0.0.1:27017/thoughtsSocialDB`;

let db;

const userData = [
  { username: "bobby", email: "bobbyb@test.com", thoughts: 2, friends: 4 },
  { number: 7 },
];

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    db.collection('user').deleteMany({}); //delete all to reseed the database
    db.collection('user').createIndex(
        {
            "username": 1 //create 1 field of username?
        },
        {
            unique: true //usernames must be unique
        }
    );
    db.collection('user').createIndex({"email": 1}, {unique: true});
    db.collection('user').insertOne({ username: "bobbybob", email: "bobbyb@test.com"} );
    db.collection('user').insertOne({ username: "ellen", email: "elle@test.com"} );

    db.collection("thought").insertOne({ thoughtsText: "example", })

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());