const mongoose = require('mongoose')

//schema
const contactSchema = new mongoose.Schema({

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
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Contact",contactSchema)