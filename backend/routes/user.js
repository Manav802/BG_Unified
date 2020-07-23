const express = require('express')
const router = express.Router()

//for validations 
const { check } = require("express-validator");


//controllers
const { signup, signin ,signout, verifyToken} = require('../controllers/user');



//signup
router.post('/signup',  [
    check("name", "Name should at least three character").isLength({ min: 3 }),
    check("email", "Check Email syntax").isEmail(),
    check('password').exists()
            .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
            .isLength({ min: 8 })
            .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/)
            .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number ')

  ], signup);



//signin

router.post('/signin',signin);
router.post('/verify/token',verifyToken)

//signout
router.get('/signout',signout);

module.exports = router