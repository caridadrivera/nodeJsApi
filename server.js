/* first, I need to require all of the dependencies
 I will be usingfor node*/
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

const port = 8000;


/*express cant process URL encoded forms on its own, so we have to parse t
he body info before being able to send it to the database.  */
app.use(bodyParser.urlencoded({extended: true}))

/*  now,
step 1. I want my server to listen to an http request by sending in
a requestwith a port number and a response which ends up being
a call back function because we are waiting for something to happen in this case;*/

/* step 2. build routes on a app folder => routes folder => and single
folder for every single route, which gets exported then imported into the master noteRoutes
on index.js file*/

/* step 3. we then require routes inside of the server like so*/


mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
  if(err) return console.log(err)
  require('./app/routes')(app, database);
  /* step 4. pass params to the database */
  /* step 1*/
  app.listen(port, ()=> {
    console.log("We goooood" + port)
  })
})
