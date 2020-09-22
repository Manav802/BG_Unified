const express = require('express')
const Router = express.Router()
const { serviceSubmit } = require('./../controllers/service')
const { check } = require('express-validator')
//submit the service
Router.post("/submit",[
    check("name","Name should be Atleast three character").exists().isLength({min:3}),
    check("email", "Wrong Email Syntax").isEmail(),
    check("contactNumber","Contact detail should be Number").isNumeric(),
    check("description","Please add description").exists().isLength({min:1}),
    check("serviceName","Please mention service name").exists().isLength({min:1}),
],serviceSubmit)


//exporting the file
module.exports = Router