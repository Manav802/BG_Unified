const Feedback  = require('../models/feedback')
const  { validationResult } = require('express-validator')
const { handleError } = require('../helpers/errorHandler')
const { sendMail } = require('../helpers/mail')

//submission  the feedback
exports.feedbackSubmit =async (req,res)=>{

    //apply the validations result
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return handleError(res, errors, errors.array()[0].msg,400)
    }

    //dest. the req.body
    const {name, email , contactNumber ,rating, description} = req.body

    //storing the feedback
    const feedback = new Feedback({
        name, email ,contactNumber, rating,description
    })
    
    feedback.save((err,data)=>{
        
        if(err){
            return handleError(res,err,"Unable to Store in DB" ,503)
        }
        else{
            var emailObject={
                
                email:['ssareen@bgunifiedsolutions.net','shubh29nov@gmail.com','yuvrajsinghmidha@gmail.com'],
                subject:"BGUS's Feedback",
                html:`
                    <h1>Rating for your Website</h1>
                    <p>Rating: ${rating}</p>
                    <p>Description: ${description}</p>
                    <h1>Sender Details</h1>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Contact No: ${contactNumber}</p>
                `
            }
            sendMail(emailObject.email,emailObject.subject,emailObject.html).then(data=>{
                return res.status(200).json({
                    success :true,
                    message:"Feedback stored Successfully"
                })
            })
            .catch(err =>{
                    console.log('Error in sending mail')
            })
        }
    })
}