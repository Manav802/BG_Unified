const express = require('express')
const { iaasCostLicense, iaasCostCustom } = require('../controllers/service')
const Router = express.Router()


//for non  custom
Router.post('/iaas/serviceCharge',iaasCostLicense)
//for custom
Router.post('/iasss/custom/serviceCharge',iaasCostCustom)

module.exports = Router