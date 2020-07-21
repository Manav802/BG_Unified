const express = require('express')
const router = express.Router()


//controllers
const { signup, signin ,signout} = require('../controllers/user')


//signup
router.post('/signup',signup);


//signin
router.post('/signin',signin);


//signout
router.get('/signout',signout);


module.exports = router