'use strict'

var Client = require('../models/client')
var mongoose = require('mongoose')

function index(req,res){
    Client.findById(req.params.id,function(err,data){
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
    Client.find({})
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
    var client = new Client(req.body)
    client.save(function(err,data){
        if(err){
            res.status(500).send({message:err})
        }else{
            res.status(201).send({data:data})
        }
    })
}

function update(req,res){
    var client_id = req.params.id
    if(client_id && mongoose.Types.ObjectId.isValid(client_id)){
        Client.findByIdAndUpdate(
            client_id,
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
    var client_id = req.params.id
    if(client_id && mongoose.Types.ObjectId.isValid(client_id)){
        Client.findByIdAndRemove(client_id,function(err,data){
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