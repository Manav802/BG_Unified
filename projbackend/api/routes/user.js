const express = require('express')
const Router = express.Router()

//Testing API

Router.get('/get',(req, res)=>{

    res.send("We are currently working")
 
})



module.exports = Router