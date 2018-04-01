'use strict'

var User = require('../models/user')
var mongoose = require('mongoose')

function index(req,res){
    User.findById(req.params.id,function(err,data){
        if(err){
            res.status(500).send({message:err})
        }else{
            if(!data){
                res.status(404).send({data:data})
            }else{
                res.status(200).send({data:data})
            }
        }
    })
}

function list(req, res){
    User.find({})
        .sort('year')
        .exec(function(err,data){
        if(err){
            res.status(500).send({message:err})
        }else{
            res.status(200).send({data:data})
        }
    })
}

function store(req,res){
    var user = new User(req.body)
    user.save(function(err,data){
        if(err){
            res.status(500).send({message:err})
        }else{
            res.status(201).send({data:data})
        }
    })
}

function update(req,res){
    var user_id = req.params.id
    if(user_id && mongoose.Types.ObjectId.isValid(user_id)){
        User.findByIdAndUpdate(
            user_id,
            req.body,
            {new:true},
            function(err,data){
                if(err){
                    res.status(500).send({message:err})
                }else{
                    if(!data){
                        res.status(404).send({data:data})
                    }else{
                        res.status(200).send({data:data})
                    }
                }
            }
        )
    }else{
        res.status(409).send({message:'Invalid id parameter'})
    }
}

function delete_(req,res){
    var user_id = req.params.id
    if(user_id && mongoose.Types.ObjectId.isValid(user_id)){
        User.findByIdAndRemove(user_id,function(err,data){
            if(err){
                res.status(500).send({message:err})
            }else{
                if(!data){
                    res.status(404).send({data:data})
                }else{
                    res.status(200).send({data:data})
                }
            }
        })
    }else{
        res.status(409).send({message:'Invalid id parameter'})
    }
}

module.exports = {
    index,
    list,
    store,
    update,
    delete_
}