import path from "path";
import express from "express";
import mongoose from "mongoose";
import userRoutes from './user.routes.js'
import config from './config.js'
import bodyParser from 'body-parser'


var app = express()

const PORT = config.port;
const MONGOURI = config.mongoUri;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//database stuff
//Connection URL - you should set this ith a configuration
//file that doesn't go in GitHub, though
const MONGODB_URI = "mongodb://127.0.0.1:27017";

await mongoose.connect('mongodb://127.0.0.1/my_database')

app.use('/', userRoutes)

//404 page
app.use(function (req, res, next){
    res.send('This page does not exist!')
})

app.listen(PORT, function(){
    console.log("listening on http://localhost:"+PORT+"/")
})