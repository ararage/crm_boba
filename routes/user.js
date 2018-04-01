'use strict'

var express = require('express')
var contoller = require('../controllers/user')
var authMidd = require('../middlewares/authenticated')
//var utilsMidd = require('../middlewares/utils')
var userMidd = require('../middlewares/user')
var api = express.Router();

api.get('/user',contoller.list)
api.get('/user/:id?',contoller.index)
api.post('/user',contoller.store)
api.post('/user/login', contoller.login)

api.put('/user/:id?',
    authMidd.ensureAuth,
    userMidd.update,
    contoller.update)
api.delete('/user/:id?',
    authMidd.ensureAuth,
    userMidd.update,
    contoller.delete_)

module.exports = api