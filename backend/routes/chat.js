const express = require('express')
const Router = express.Router()

const successMessage = {
  inProgress: "In Progress for chat"
}


//Testing API
Router.get('/get',async (req, res)=>{
 
  res.send(successMessage.inProgress)    
   
})

module.exports = Router