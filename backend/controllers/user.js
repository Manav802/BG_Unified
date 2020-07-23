const {connection} = require('../config/connectionDB') 
const { handleError } = require('../helpers/errorHandler');
const sequelize = require('../config/connectionDB');
const { DataTypes } = require('sequelize');
const  {sendMail} = require('../helpers/mail')


//authenication libraries
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const speakeasy = require('speakeasy')
const QRCode  = require('qrcode')

//models
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

    //generate the secret
    var secret =await speakeasy.generateSecret({length: 20,name:`BG_Unified: ${name} `});

    const user ={
        name:name,email :email , password: password
    }
    
    //add 2-F properties 
    user.auth_base= secret.base32
    user.auth_buffer = await QRCode.toDataURL(secret.otpauth_url)
    
    //generate the salt and encrypt the password
    const salt = await bcrypt.genSalt(parseInt(process.env.salt));
    user.password= await bcrypt.hash(user.password,salt)

    User.create(user).then(result =>{
        
        res.status(200).json({
            success:"true",
            message:"User Registered Successfully",
            image:user.auth_buffer
        })
    })
    .catch(err =>{
        console.log(err)
        return handleError(res,err,"Email already registered")
    })
}


//signin 
exports.signin = async(req, res) => {

    const { email, password} = req.body;
    //checking if no  record found
    if(user===null){
        return handleError(res,{},"No Record Found")
    }
    //checking if password match or not 
    bcrypt.compare(password,user.dataValues.password, (err,isMatch)=>{
        if(!isMatch){
            return handleError(res,err,"Incorrect Email and password")
        }
        else{
            res.status(200).json({
                success:"true",
                message:"User Details Verified Successfully"
            })
        }
    })
};


//google authenitcator
exports.verifyToken = async (req, res )=>{
    
    const {email, token} = req.body
    //getting the user details
    const user = await User.findOne({  where:{email: email} })

    //verify the google autheticator 
    var verified =speakeasy.totp.verify({
        secret: user.dataValues.auth_base,
        encoding: 'base32',
        token: token
    })
    if(!verified){
        return handleError(res,{},"Incorrect Authenticator password")
    }
    else{
       
        res.status(200).json({
            success:"True",
            message:"Login Successfully"
        })
    }
}


//signut route
exports.signout = (req, res) => {
   res.send("logout")
};
  
