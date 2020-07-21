const passport  = require('passport')
const {connection} = require('../config/connectionDB') 
const { handleError } = require('../helpers/errorHandler')


//singup controller
exports.signup = (req, res)=>{

    const {name ,  email ,password ,confirmPassword} =req.body 
  


}


//signin 
exports.signin = (req, res)=>{
    
    passport.authenticate('local',function(err, data){
           if(err,data){
               throw err;
           }
           else{
               console.log("login successfully")
           }
    }),
    (req, res,next)
      

}

//logout controller
exports.signout = (req,res)=>{

    req.logout();
    console.log('logout successfully')

}