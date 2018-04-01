'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : {
        type : String,
        trim : true,
        required : 'Insert a username please',
        index : {
            unique : true
        }
    },
    email : {
        type : String,
        trim : true,
        required : 'Insert an email please',
        index : {
            unique : true
        }
    },
    role : {
        type : String,
        trim : true,
        default: 'ROLE_ADMIN',
        index : {
            unique : false
        },
        enum:[
            'ROLE_ADMIN',
            'ROLE_GUEST'
        ]
    },
    password : {
        type : String,
        trim : true,
        required : 'Insert a password please',
        index : {
            unique : false
        }
    }
},
    {
        timestamps : true
    }
);

var User = mongoose.model('User' , UserSchema)
module.exports = User;