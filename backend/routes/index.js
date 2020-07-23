const  userRoutes = require('./user')
const  serviceRoutes = require('./service')
const  chatRoutes = require('./chat')
const  issueRoutes = require('./issue')
const  ticketRoutes = require('./ticket')

const express =require('express')
const router = express.Router()

router.use("/api/user", userRoutes)
router.use("/api/service", serviceRoutes)
router.use("/api/chat", chatRoutes)
router.use("/api/issue", issueRoutes)
router.use("/api/ticket", ticketRoutes)

//handling error 404 (Not Found)
router.use((req, res, next) => {
  
    const error = new Error('Page Not Found');
    error.status = 404;
    res.status(error.status).json({
        message: error.message
    })
});
    
module.exports = router