const mongoose = require('mongoose')

//schema
const feedbackSchema = new mongoose.Schema({

    name:{
        type:String,
        maxlength:32,
        default:""
    },
    email:{
        type:String,
        maxlength:100,
        trim:true,
        default:""
    },
    contactNumber:{
        type:String,
        maxlength:32,
        default:""
    },
    rating:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Feedback",feedbackSchema)