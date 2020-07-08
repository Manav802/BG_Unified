const express = require('express')
const Router = express.Router()
const {sendSMS} = require('../../helper/sms')

//Testing API


Router.get('/user',(req, res)=>{
  
    res.send("we are currently working for user")
})

module.exports = Router