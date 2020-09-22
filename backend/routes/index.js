const  userRoutes = require('./user')
const  serviceRoutes = require('./service')
const  feedBackRoutes = require('./feedback')
const  reportRoutes = require('./report')
const  contactRoutes = require('./contact')
const  docuRoutes = require('./eSign')
const  adminDashboard = require('./adminDashboard')


const express =require('express')
const router = express.Router()

router.use("/api/user", userRoutes)
router.use("/api/service", serviceRoutes)
router.use("/api/feedback", feedBackRoutes)
router.use("/api/contact", contactRoutes)
router.use("/api/report", reportRoutes)
router.use("/api/document", docuRoutes)
router.use("/api/admin",adminDashboard)

const errorMessage = {
    pageNotFound: 'Page Not Found'
}

//handling error 404 (Not Found)
router.use((req, res, next) => {
  
    const error = new Error(errorMessage.pageNotFound);
    error.status = 404;
    res.status(error.status).json({
        message: error.message
    })
});
    
module.exports = router