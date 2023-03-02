var path = require('path');
var express = require("express");
var app = express()
const PORT = 8000

//database stuff
//Connection URL - you should set this ith a configuration
//file that doesn't go in GitHub, though
const MONGODB_URI = "mongodb://127.0.0.1:27017";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URI, {dbName:"users"})
mongoose.connection.on('error', err => {
    throw new Error('unable to connect to database: ${MONGOURI')
})

//404 page
app.use(function (req, res, next){
    res.send('This page does not exist!')
})

app.listen(PORT, function(){
    console.log("listening on http://localhost:"+PORT+"/")
})