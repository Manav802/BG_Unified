const { handleError } = require('../helpers/errorHandler')
const Contact  = require('../models/contact')
const  { validationResult } = require('express-validator')
const { sendMail } = require('../helpers/mail')

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
        else{
            var  emailObject={
                email: "ssareen@bgunifiedsolutions.net",
                subject:"BGUS's Contact Us",
                html:`
                    <h1>User Details are Following as :</h1>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Contact Number: ${contactNumber}</p>
                    <p>Subject: ${subject}</p>
                    <p>Message: ${message}</p>
                `
            }
            sendMail(emailObject.email,emailObject.subject,emailObject.html).then(data=>{
                return res.status(200).json({
                    success :true,
                    message:"Contact Information stored Successfully"
                })
            })
            .catch(err =>{
                    console.log('Error in sending mail')
            })
        }        

    })
}