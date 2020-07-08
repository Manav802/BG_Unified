const express = require('express')
const Router = express.Router()

//Testing API


Router.get('/user',(req, res)=>{
    console.log("present ghe")
    res.send("we are currently working for user")
 
})

module.exports = Router