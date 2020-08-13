const express = require('express')
const Router = express.Router()

const successMessage = {
  progTicket: "In Progress for ticket"
}

//Testing API
Router.get('/get',async (req, res)=>{
 
  res.send(successMessage.progTicket)    
   
})

module.exports = Router