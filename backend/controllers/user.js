const { handleError } = require('../helpers/errorHandler')
const  { validationResult } = require('express-validator')
const jwt  = require('jsonwebtoken')
const User  = require('../models/user')
const speakeasy = require("speakeasy")
const QRCode = require("qrcode")

//redis funtionality
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function(err, data) {
    if(err) throw err;
})

//signUP  controller 
exports.signUp = async (req, res) =>{
  
  //apply the validations result
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return handleError(res, errors, errors.array()[0].msg,400)
  }
  
  const { firstName, lastName , email, password, confirmPassword ,contactNumber} = req.body
  //check that password and confimm password are same or not
  if (password !== confirmPassword) {
    return handleError(res, {}, "Password does not match",400)
  }
  //generate the secret
  const secret = await speakeasy.generateSecret({
    length: 20,
    name: `BG_Unified: ${email} `,
  });

  var user = new User(req.body)
  //add 2-F properties
  user.twoFactorBase = secret.base32;
  user.twoFactorBuffer = await QRCode.toDataURL(secret.otpauth_url);
  //saving the user in the databse
  user.save((err, data)=>{
    if(err){
        return handleError(res, err, "Unable to store in DB",503)
    }
    else{
        return res.status(200).json({
            type: "Success",
            message:"User Registered Successfully",
            image:user.twoFactorBuffer
        })
    }
  })
}

//singin  controller
exports.signin = async (req,res)=>{
     
    try{
        const errors = validationResult(req)
        const { email, password } = req.body
        //validate the errorr
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg},
                400
            )
        }
        User.findOne({ email }, (err, user) => {

            //checking the user
            if (err || !user) {
                return  handleError(res,err,"User Does not exist",400)
            }
            //authenticate the user
            if (!user.autheticate(password)) {
                return handleError(res,err, "Invalid Email and Password",400)
            }
            return res.status(200).json({
                sucess :true,
                message:"Credential passed"
            })
        })
    }catch(err){
        return handleError(res,err,"There is problem in SignIn",503)
    }
}


//verify controller 
exports.verifyToken = async (req,res)=>{

    try{
        //apply the validations result
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return handleError(res, errors, errors.array()[0].msg,400)
        }
        //destruct the incoming body
        const { email, token } = req.body;
        //getting the user details
        const userDetails = await User.findOne({email});
        //verify the google autheticator
        var verified = speakeasy.totp.verify({
            secret: userDetails.twoFactorBase,
            encoding: "base32",
            token: token,
        })
        if (!verified) {
            return handleError(res, {}, "Incorrect 6 digit token",400);
        } 
        else {
            const token = jwt.sign({ _id: userDetails._id }, process.env.SECRET,{ expiresIn: '1h'})
            //adding the token to  the redis
            client.SADD(`${userDetails._id}`,`${token}`,(err, data)=>{
                if(err) throw err
            })
            //send token in the header 
            return res.status(200).header('Authorization',`Bearer `+token).json({
                Success:"true",
                message :"Sign In successfully"
            })
        }
    }catch(err){
        return handleError(res,err,"There is problem in SignIn",503)
    }
}


//signout controller
exports.signout =async(req, res)=>{

    try {
        //checking the header 
        var Btoken = req.header('Authorization')
        //adding the token
        const token  = Btoken.split(' ')[1]
        //verify the toekn 
        jwt.verify(token,process.env.SECRET,(err,verified)=>{
        if(err)throw err;
            else{
            
                //id of current user 
                const id =(jwt.decode(token)._id)
                client.SREM(`${id}`,`${token}`,(err,data)=>{
                    if(err) throw err;
                    else{
                        return res.status(200).json({
                            success:"true",
                            message:"SignOut Successfully"
                        })
                    }
                })
            }
        })
    }
    catch(err){
        return handleError(res,err,"Problem in SignOut",503)
    }
}


// IsSigned In middleware 

exports.isSignedIn = async (req, res, next)=>{

    //checking the header 
    var Btoken = req.header('Authorization')
    //adding the token
    if(!Btoken){
        return handleError(res,{},"User not loggedIn",401)
    }
    const token  = Btoken.split(' ')[1]
    //if token  does not exist 
    if(!token){
        return handleError(res,{},"Access Denied",401)
    }
    //verify the toekn 
    jwt.verify(token,process.env.SECRET,(err,verified)=>{
        if(err) {
            return handleError(res, err, "Access Denied",401)
        }
        else{
            //attaching the user to  req 
            const id =(jwt.decode(token)._id)
            //check in the redis
            client.sismember(`${id}`,`${token}`,(err, data)=>{
                if(err) console.log(err)
                //handle checking status
                if(!data){
                    return handleError(res, err, "Access Denied")
                }
            })
            User.findById(id).exec((err, data)=>{
                if(err) throw err
                else{
                    req.user = data
                    next()
                }
            })
        }
    })
}


// isAdmin  to  identify admin
exports.isAdmin  = async(req, res, next) =>{
    
    //confirming from the local data
    if(req.user.role ===0){
        return handleError(res,{},"Access Denied,You are not Admin",401)
    }
    //verify from the database
    const userData = await User.findById(req.user._id)
    if(userData.role===0){
        return handleError(res,{},"Access Denied,You are not Admin",401)
    }
    //if admin
    next()
}