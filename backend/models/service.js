const mongoose = require('mongoose')

//schema
const contactSchema = new mongoose.Schema({

    archive:{
        type:Boolean,
        default:false
    },
    name:{
        type:String,
        required:true,
        maxlength:32,
    },
    email:{
        type:String,
        required:true,
        maxlength:100,
        trim:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    serviceName:{
        type:String,
        required:true
    },
    serviceArray:{
        type:Array,
        default:[]
    }

},{timestamps:true})

module.exports = mongoose.model("Service",contactSchema)