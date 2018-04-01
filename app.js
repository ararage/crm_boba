'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var client = require('./routes/client')
var business = require('./routes/business')
var user = require('./routes/user')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(function(req,res,next){
    //Consumo desde cualquier lugar
    res.header('Access-Control-Allow-Origin','*');
    //Headers Permitido
    res.header('Access-Control-Allow-Headers','X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.header('Allow','GET,POST,PUT,DELETE')
    next()
})

app.use('/crm-boba/api',business),
app.use('/crm-boba/api',client),
app.use('/crm-boba/api',user)

module.exports = app