'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BusinessSchema = new Schema({
    client:{
        type:Schema.ObjectId,
        ref:'Client',
        required:'Insert a business please'
    },
    description:{
        type:String,
        trim:true,
        required:'Insert a description please',
        index:{
            unique:false
        }
    },
    value:{
        type:Number,
        trim:true,
        required:'Insert a value please',
        index:{
            unique:false
        }
    },
    status:{
        type:Schema.ObjectId,
        ref:'Status',
        required:'Insert a status please'
    }
},
    {
        timestamps:true
    }
);

var Business = mongoose.model('Business',BusinessSchema)
module.exports = Business
