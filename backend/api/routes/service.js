const express = require('express')
const Router = express.Router()


//Testing API
Router.get('/service',(req, res)=>{

    res.send("we are currently working for the service")
 
})

module.exports = Router