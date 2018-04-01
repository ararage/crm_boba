'use strict'

var express = require('express')
var contoller = require('../controllers/client')
var api = express.Router();

api.get('/client',contoller.list)
api.get('/client/:id?',contoller.index)
api.post('/client',contoller.store)
api.put('/client/:id?',contoller.update)
api.delete('/client/:id?',contoller.delete_)

module.exports = api