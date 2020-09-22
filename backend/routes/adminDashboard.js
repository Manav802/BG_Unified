const express = require('express')
const { getContacts, getFeedbacks, getReports, getServices, deleteContacts, deleteFeedbacks, deleteReports, deleteServices } =
require('../controllers/adminDashboard')
const Router = express.Router()


// Get All Contacts 
Router.get('/contact/all',getContacts)

//Get All  Feedbacks
Router.get('/feedback/all',getFeedbacks)

//Get all  Reports 
Router.get('/report/all',getReports)

//Get all  Service Demands
Router.get('/service/all',getServices)



// toggling API
Router.put('/contact/delete',deleteContacts)
Router.put('/feedback/delete',deleteFeedbacks)
Router.put('/report/delete',deleteReports)
Router.put('/service/delete',deleteServices)


//exporting the module
module.exports = Router