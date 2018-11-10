'use strict'

import express from 'express';  
import { urlencoded, json } from 'bodyParser';
import request from 'resquest';

const app = express()

app.set("port", (process.env.PORT || 5000))

app.use(urlencoded({extended: false}))
app.use(json())

//ROUTES
app.get("/", function(req, res){
    res.send("Hi test Chatbot")


})

app.get("/webhook/", function(req, res){

    if(req.query["hub.verify_token"]==="MAL"){
        res.send(res.query["hub.challenge"])
    }
    res.send("Mauvais Token")

})

app.listen(app.get("port"), function(){
    console.log("running: port")


})