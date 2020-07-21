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

//validations 
var User = require('../models/user')(sequelize, DataTypes);

//for validations 
const { check, validationResult } = require("express-validator");
const { send } = require('@sendgrid/mail');


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

    //checking the cookie
    const cookie = req.cookies['token']
    if(cookie!==undefined){
        return handleError(res,{},"User Already Signed In...")
    }

    const { email, password} = req.body;
    //for google authenticator
    const key =req.body.token

    var  user = await User.findOne({  where:{email: email} })
    
    //checking if no  record found
    if(user===null){
        return handleError(res,{},"No Record Found")
    }
    
    //checking if password match or not 
    await bcrypt.compare(password,user.dataValues.password, (err,isMatch)=>{
        if(!isMatch){
            return handleError(res,err,"Incorrect Email and password")
        }
        else{

            //verify the google autheticator 
            var verified = speakeasy.totp.verify({
                secret: user.dataValues.auth_base,
                encoding: 'base32',
                token: key
            });

            if(!verified){
                return handleError(res,err,"Incorrect Authenticator password")
            }

            //setting up  the cokkie
            const token =jwt.sign({ id: user.dataValues.id }, "secret");
            //put token in cookie
            res.cookie("token", token, { maxAge: 60*60*1000, httpOnly: true });
            res.status(200).json({
                success:"true",
                message:"SignIn successfully"
            })
        }
    })
};


  
//signut route
exports.signout = (req, res) => {

    //checking the cookie
    const cookie = req.cookies['token']
    if(cookie===undefined){
        return handleError(res,{},"User Already SignOut...")
    }
    res.clearCookie("token");
    res.json({
    success:"true",
    message: "User signout successfully"
    });
};
  
