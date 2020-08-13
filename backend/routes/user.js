const express = require('express')
const router = express.Router()

//signup  route
const { signUp, signin, isSignedIn, signout, verifyToken } = require('../controllers/user') 
const {check} = require('express-validator')

//signup
router.post('/signup',  [
  check("firstName", "Name should at least three character").isLength({ min: 3 }),
  check("email", "Check Email syntax").isEmail(),
  check('password').exists()
          .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
          .isLength({ min: 8 })
          .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
          .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/)
          .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number ')

], signUp);


//signin 
router.post("/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
)

//verify token
router.post('/verifyToken',verifyToken)

//singout 
router.get('/signout',signout)



//Testing API
// router.get('/test',isSignedIn,(req, res)=>{
//    res.send("Access Granted")
// })


module.exports = router