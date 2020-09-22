// improting all the database modles
const Contact  =  require('../models/contact')
const Report   =  require('../models/report')
const Feedback =  require('../models/feedback')
const Service  =  require('../models/service')
const { handleError } = require('../helpers/errorHandler')
const mongoose  = require('mongoose')

// contacts
exports.getContacts = async(req, res)=>{

    try{
        //based on this , we will apply filter
        const archive  = req.query.archive
        //testing condition
        if(archive===undefined){
            Contact.find()
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
        else{
            Contact.find({archive})
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }
}


//reports
exports.getReports = async(req, res)=>{
    try{
        //based on this , we will apply filter
        const archive  = req.query.archive
        //testing condition
        if(archive===undefined){
            Report.find()
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
        else{
            Contact.find({archive})
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }

    
}


// feedback
exports.getFeedbacks = async(req, res)=>{
    try{
        //based on this , we will apply filter
        const archive  = req.query.archive
        //testing condition
        if(archive===undefined){
            Feedback.find()
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
        else{
            Contact.find({archive})
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }
}

// service
exports.getServices= async(req, res)=>{
    try{
        //based on this , we will apply filter
        const archive  = req.query.archive
        //testing condition
        if(archive===undefined){
            Service.find()
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
        else{
            Contact.find({archive})
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    data :result
                })
            })
            .catch(error =>{
                return handleError(res,error,"Problem with Database",503)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }
}


// Toggling api for archive


// contacts
exports.deleteContacts = async(req,res)=>{
    try{
        // testing conditions
        const {idCollection} = req.body
        
        //testing condition
        if(idCollection.length === 0 ||  (!Array.isArray(idCollection))){
            return handleError(res,{},"Please select something to update",400)
        }
        else{
            Contact.update(
                { _id: { $in:idCollection } },
                { $set: {archive:true} },
                {multi: true}
            )
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    message:"Contacts archived Successfully"
                })
            })
            .catch(error =>{
                return handleError(res, error,"Unable to Archived All",400)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }

}

// services
exports.deleteServices = async(req,res)=>{
    try{
        // testing conditions
        const {idCollection} = req.body
        
        //testing condition
        if(idCollection.length === 0 ||  (!Array.isArray(idCollection))){
            return handleError(res,{},"Please select something to update",400)
        }
        else{
            Service.update(
                { _id: { $in:idCollection } },
                { $set: {archive:true} },
                {multi: true}
            )
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    message:"Services archived Successfully"
                })
            })
            .catch(error =>{
                return handleError(res, error,"Unable to Archived All",400)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }

}

// feedback
exports.deleteFeedbacks = async(req,res)=>{
    try{
        // testing conditions
        const {idCollection} = req.body
        
        //testing condition
        if(idCollection.length === 0 ||  (!Array.isArray(idCollection))){
            return handleError(res,{},"Please select something to update",400)
        }
        else{
            Feedback.update(
                { _id: { $in:idCollection } },
                { $set: {archive:true} },
                {multi: true}
            )
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    message:"Feedbacks archived Successfully"
                })
            })
            .catch(error =>{
                return handleError(res, error,"Unable to Archived All",400)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }


}

// reports
exports.deleteReports = async(req,res)=>{
    try{
        // testing conditions
        const {idCollection} = req.body
        
        //testing condition
        if(idCollection.length === 0 ||  (!Array.isArray(idCollection))){
            return handleError(res,{},"Please select something to update",400)
        }
        else{
            Report.update(
                { _id: { $in:idCollection } },
                { $set: {archive:true} },
                {multi: true}
            )
            .then(result=>{
                return res.status(200).json({
                    success:true,
                    message:"Reports archived Successfully"
                })
            })
            .catch(error =>{
                return handleError(res, error,"Unable to Archived All",400)
            })
        }
    }
    catch(error){
        return handleError(res,error,"Internal Server error",500)
    }
}


