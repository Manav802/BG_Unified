const express = require('express')
const Router = express.Router()

//Testing API
Router.get('/get',async (req, res)=>{
 
  res.send("In Progress for ticket")    
   
})

module.exports = Router