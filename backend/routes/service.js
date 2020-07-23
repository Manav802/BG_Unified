const express = require('express')
const Router = express.Router()

const successMessage = {
  progService: "In Progress for service"
}

//Testing API
Router.get('/get',async (req, res)=>{
 
  res.send(successMessage.progService)    
   
})

module.exports = Router