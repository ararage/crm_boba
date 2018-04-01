'use strict'

var jwt = require('jwt-simple'),
    config = require('../config.js');

//Obtiene la fecha de creacion del token y la expiracion del token
var moment = require('moment');
var secret = config.secret

exports.createTokenUser = function createTokenUser(obj) {
    var payload = {
        sub: obj._id,
        username: obj.username,
        email: obj.email,
        role: obj.role,
        iat: moment().unix(), //Fecha de creacion del token
        exp: moment().add(30, 'days').unix() //Fecha de expiracion del token
    };
    return jwt.encode(payload, secret);
}
