'use strict'

var jwt = require('jwt-simple'),
    config = require('../config.js');
var moment = require('moment');
var secret = config.secret
var secret_admin = config.secretAdmin

/**
 * Autor: José Ricardo Pérez Pérez
 * Fecha Creación : 13/06/2017
 * Fecha Última Actualización: 13/06/2017
 * Rev:  0.0.1 - 130617 Creación de la función
 * Versión : 0.0.1
 * Función que se encarga de verificar que la cabecera authorization haya sido proporcionada, que
 * el token de la cabecera venga lleno y sea valido
 * **/
exports.ensureAuth = function ensureAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'Invalid request, empty authorization header' })
    }

    var token = req.headers.authorization.replace(/['"]+/g, '')

    try {
        var payload = jwt.decode(token, secret)

        if (payload.exp <= moment.unix()) {
            return res.status(401).send({ message: 'Expired Token' })
        }

    } catch (ex) {
        console.log(ex)
        res.status(401).send({ message: 'Not Authorized, invalid token' })
        return 
    }

    req.user = payload;

    next();
};