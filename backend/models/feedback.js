const mongoose = require('mongoose')

//schema
const feedbackSchema = new mongoose.Schema({

    archive:{
        type:Boolean,
        default:false
    },
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
        type:Number,
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