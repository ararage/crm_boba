'use strict'

var express = require('express')
var contoller = require('../controllers/business')
var api = express.Router();

api.get('/business',contoller.list)
//Endpoint para obtener un auto
api.get('/business/:id?',contoller.index)
api.post('/business',contoller.store)
api.put('/business/:id?',contoller.update)
api.delete('/business/:id?',contoller.delete_)

module.exports = api