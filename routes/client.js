'use strict'

var express = require('express')
var contoller = require('../controllers/client')
var authMidd = require('../middlewares/authenticated')
var utilsMidd = require('../middlewares/utils')
var api = express.Router();

api.get('/client',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.list)
api.get('/client/:id?',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.index)
api.post('/client',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.store)
api.put('/client/:id?',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.update)
api.delete('/client/:id?',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.delete_)

module.exports = api