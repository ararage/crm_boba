'use strict'

var express = require('express')
var contoller = require('../controllers/business')
var authMidd = require('../middlewares/authenticated')
var utilsMidd = require('../middlewares/utils')
var api = express.Router();

api.get('/business',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.list)
api.get('/business/:id?',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.index)
api.post('/business',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.store)
api.put('/business/:id?',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.update)
api.delete('/business/:id?',
    authMidd.ensureAuth,
    utilsMidd.verifyTokenAdmin,
    contoller.delete_)

module.exports = api