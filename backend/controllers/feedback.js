const Feedback  = require('../models/feedback')
const  { validationResult } = require('express-validator')
const { handleError } = require('../helpers/errorHandler')

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
        return res.status(200).json({
            success :true,
            message:"Feedback stored Successfully"
        })
    })
}