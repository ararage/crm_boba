'use strict'

var express = require('express')
var contoller = require('../controllers/user')
var api = express.Router();

api.get('/user',contoller.list)
api.get('/user/:id?',contoller.index)
api.post('/user',contoller.store)
api.put('/user/:id?',contoller.update)
api.delete('/user/:id?',contoller.delete_)

module.exports = api