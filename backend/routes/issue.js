const express = require('express')
const Router = express.Router()

const successMessage = {
  progIssue: "In Progress for issue"
}

//Testing API
Router.get('/get',async (req, res)=>{
 
  res.send(successMessage.progIssue)    
   
})

module.exports = Router