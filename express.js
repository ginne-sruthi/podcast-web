const express = require('express');
const mongodb = require('mongodb');


const app = express();
const mongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://localhost:27017/podcasts';
const port = process.env.PORT || 3000;

mongoClient.connect(dbUrl, (err, client) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to database!');
    const db = client.db('podcasts');
    app.locals.db = db;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }
});