const mongoose = require('mongoose')

//schema
const reportSchema = new mongoose.Schema({

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
        type:String,
        required:true,
        maxlength:32,
    },
    description:{
        type:String,
        required:true
    },
    error:{
        type:String,
        required:true
    },
    browser:{
        type:String,
        required:true
    },
    operatingSystem:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Report",reportSchema)