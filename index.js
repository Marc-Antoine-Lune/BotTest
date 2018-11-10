'use strict'

const express = require('express')
const bodyParser =require('body-Parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || '8000'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTES
app.get('/', function(req, res){
    res.send('Hi test Chatbot')


})

app.get('/webhook/', function(req, res){

    if(req.query['hub.verify_token']==="MAL"){
        res.send(res.query['hub.challenge'])
    }
    res.send("Mauvais Token")

})

app.listen(app.get('port'), function(){
    console.log("running: port")


})