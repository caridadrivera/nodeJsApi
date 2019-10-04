/* first, I need to require all of the dependencies
 I will be usingfor node*/
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;


/*  now,
step 1. I want my server to listen to an http request by sending in
a requestwith a port number and a response which ends up being
a call back function because we are waiting for something to happen in this case;*/

/* step 2. build routes on a app folder => routes folder => and single
folder for every single route, which gets exported then imported into the master noteRoutes
on index.js file*/

/* step 3. we then require routes inside of the server like so*/
require('./app/routes')(app, {});


/* step 1*/
app.listen(port, ()=> {
  console.log("We goooood" + port)
})

/* making CRUD routes */
