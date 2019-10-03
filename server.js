/* first, I need to require all of the dependencies
 I will be usingfor node*/
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;


/*  now,
I want my server to listen to an http request by sending in
a requestwith a port number and a response which ends up being
a call back function because we are waiting for something to happen in this case;*/

app.listen(port, ()=> {
  console.log("We goooood" + port)
})
