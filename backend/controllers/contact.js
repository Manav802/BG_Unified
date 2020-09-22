const { handleError } = require('../helpers/errorHandler')
const Contact  = require('../models/contact')
const  { validationResult } = require('express-validator')

//submission  the contact
exports.contactSubmit =async (req,res)=>{

    //apply the validations result
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return handleError(res, errors, errors.array()[0].msg,400)
    }
    
    //destructuring the comming body
    var {name , email , contactNumber, subject, message} = req.body
    
    //creating the new contact
    const contact = new Contact({
        name , email, contactNumber ,subject, message
    })
    
    contact.save((err,data)=>{

        if(err){
            return handleError(res,err,"Unable to Store in DB" ,503)
        }
        
        return res.status(200).json({
            success :true,
            message:"Contact Information stored Successfully"
        })
    })
}