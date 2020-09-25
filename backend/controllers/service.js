const { validationResult } = require("express-validator");
const { handleError } = require("../helpers/errorHandler");
const Service = require("../models/service");

//submission  the service
exports.serviceSubmit =async(req,res)=>{
 
    //apply the validations result
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return handleError(res, errors, errors.array()[0].msg,400)
    }
    //dest. the req.body
    const {name, email , contactNumber ,serviceName, description,serviceString} = req.body
    
    //make service requirement array
    var serviceArray = Array()
    
    if(serviceString){
        //adding element to  serviceRequirement
        serviceString.split(',').forEach(element => {
            serviceArray.push(element)
        })
    }
     
    //storing the feedback
    const service = new Service({
        name, email ,contactNumber,description,serviceName,serviceArray
    })
    
    service.save((err,data)=>{
        
        if(err){
            return handleError(res,err,"Unable to Store in DB" ,503)
        }
        return res.status(200).json({
            success :true,
            message:"Service Request stored Successfully"
        })
    })
};
