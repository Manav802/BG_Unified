const express = require('express')
const Router = express.Router()
const { contactSubmit } = require('../controllers/contact')
const {check} = require('express-validator')


//submit the contact details
Router.post("/submit",[
    check("name","Name should be Atleast three character").exists().isLength({min:3}),
    check("email", "Wrong Email Syntax").isEmail(),
    check("contactNumber","Contact detail should be Number").isNumeric(),
    check("subject","Subject should be Atleast three character").exists().isLength({min:3}),
    check("message","Message should be Atleast three character").exists().isLength({min:3}),
],contactSubmit)


//exporting the file
module.exports = Router 