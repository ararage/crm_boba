'use strict'

var mongoose = require('mongoose'),
    config = require('./config')

mongoose.Promise = global.Promise;
mongoose.connect(config.database).then(
    ()=>{
        console.log('Base de datos conectada Papu')
    },
    err=>{
        console.log('Error :(')
        console.log(err.stack)
    }
);