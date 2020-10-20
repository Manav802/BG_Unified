const { validationResult } = require("express-validator");
const { handleError } = require("../helpers/errorHandler");
const Service = require("../models/service");
const { sendMail } = require('../helpers/mail')

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
        else{
            var emailObject={
                email: "ssareen@bgunifiedsolutions.net",
                subject:"BGUS's Get a Quote",
                html:`
                    <h1>Details are following as:</h1>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Contact no: ${contactNumber}</p>
                    <p>Service Name: ${serviceName}</p>
                    <p>Description: ${description}</p>
                    <p>Requirements are: ${serviceString} </p>
                `
            }
            // assigning  email id
            if(serviceName=="Web Development As A Service"){
                emailObject.email = ['ssareen@bgunifiedsolutions.net','shubh29nov@gmail.com','yuvrajsinghmidha@gmail.com']
            }
            sendMail(emailObject.email,emailObject.subject,emailObject.html).then(data=>{
                return res.status(200).json({
                    success :true,
                    message:"Service Request stored Successfully"
                })
            })
            .catch(err =>{
                    console.log('Error in sending mail')
            })
        } 
    })
};
