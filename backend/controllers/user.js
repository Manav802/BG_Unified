const {connection} = require('../config/connectionDB') 
const { handleError } = require('../helpers/errorHandler');
const sequelize = require('../config/connectionDB');
const { DataTypes } = require('sequelize');

//authenication libraries
const bcrypt = require('bcryptjs')
const passport = require('passport')

//validations 
var User = require('../models/user')(sequelize, DataTypes);

//for validations 
const { check, validationResult } = require("express-validator");


//singup controller
exports.signup =async (req, res)=>{
    
    //apply the validations result 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return handleError(res,errors,errors.array()[0].msg)
    }
    
    const {name ,  email ,password,confirmPassword }=req.body 

    //check that password and confimm password are same or not
    if(password !== confirmPassword){
        return handleError(res,{},"Password should match")
    }

    const user ={
        name:name,email :email , password: password
    }

    //generate the salt and encrypt the password
    const salt = await bcrypt.genSalt(parseInt(process.env.salt));
    user.password= await bcrypt.hash(user.password,salt)

    console.log("pass"  + user.password)
    User.create(user).then(result =>{
        res.status(200).json({
            success:"true",
            message:"User Registered Successfully"
        })
    })
    .catch(err =>{
        return handleError(res,err,"Email already registered")
    })
}

//signin 
exports.signin = (req, res,next)=>{
    
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