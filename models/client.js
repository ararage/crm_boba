'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
    company : {
        type : String,
        trim : true,
        required : 'Insert a company name please',
        index : {
            unique : false
        }
    },
    name : {
        type : String,
        trim : true,
        required : 'Insert a name please',
        index : {
            unique : false
        }
    },
    email : {
        type : String,
        trim : true,
        required : 'Insert an email please',
        index : {
            unique : false
        }
    }
},
    {
        timestamps : true
    }
);

var Client = mongoose.model('Client' , ClientSchema)
module.exports = Client;