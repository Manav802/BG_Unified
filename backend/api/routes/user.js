const express = require('express')
const Router = express.Router()

//Testing API
Router.get('/user',async (req, res)=>{
 
  res.send("In Progress for User")    
   
})

module.exports = Router