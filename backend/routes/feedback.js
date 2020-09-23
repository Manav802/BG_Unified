const express = require('express')
const Router = express.Router()
const { feedbackSubmit } = require('../controllers/feedback')
const {check} = require('express-validator')

//submit the feedback
Router.post("/submit",[
    check("description","Description should be Atleast three character").exists().isLength({min:3}),
    check("rating", "Rating syntax error").isInt({gt:0,lt:5})
],feedbackSubmit )


//exporting the file
module.exports = Router