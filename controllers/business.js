'use strict'

var Business = require('../models/business')
var mongoose = require('mongoose')

function index(req,res){
    Business.findById(req.params.id,function(err,data){
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
    Business.find({})
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
    var business = new Business(req.body)
    business.save(function(err,data){
        if(err){
            res.status(500).send({message:err})
        }else{
            res.status(201).send({data:data})
        }
    })
}

function update(req,res){
    var business_id = req.params.id
    if(business_id && mongoose.Types.ObjectId.isValid(business_id)){
        Business.findByIdAndUpdate(
            business_id,
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
    var business_id = req.params.id
    if(business_id && mongoose.Types.ObjectId.isValid(business_id)){
        Auto.findByIdAndRemove(business_id,function(err,data){
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