const { handleError } = require("../helpers/errorHandler");
const sequelize = require("../config/connectionDB");
const { DataTypes } = require("sequelize");

//authenication libraries
const bcrypt = require("bcryptjs");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const jwt = require('jsonwebtoken')
// require('dotenv').config()

//models
var User = require("../models/user")(sequelize, DataTypes);

//for validations
const { validationResult } = require("express-validator");

const successMessage = {
  userRegistered: "User Registered Successfully",
  detailsVarified: "Incorrect Email and password",
  login: "Login Successfully"
}

const errorMessage = {
  passMatch: "Password should match",
  emailExist: "Email already registered",
  noRecordFound: "No Record Found",
  incorrectCredentials: "Incorrect Email and password",
  incorrectAuthenticator: "Incorrect Authenticator password"
}


//singup controller
exports.signup = async (req, res) => {
  //apply the validations result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(res, errors, errors.array()[0].msg);
  }

  const { name, email, password, confirmPassword } = req.body;

  //check that password and confimm password are same or not
  if (password !== confirmPassword) {
    return handleError(res, {}, errorMessage.passMatch);
  }

  //generate the secret
  var secret = await speakeasy.generateSecret({
    length: 20,
    name: `BG_Unified: ${name} `,
  });

  const user = {
    name: name,
    email: email,
    password: password,
  };

  //add 2-F properties
  user.auth_base = secret.base32;
  user.auth_buffer = await QRCode.toDataURL(secret.otpauth_url);

  //generate the salt and encrypt the password
  const salt = await bcrypt.genSalt(parseInt(process.env.salt));
  user.password = await bcrypt.hash(user.password, salt);

  User.create(user)
    .then((result) => {
      res.status(200).json({
        success: "true",
        message: successMessage.userRegistered,
        image: user.auth_buffer,
      });
    })
    .catch((err) => {
      console.log(err);
      return handleError(res, err, errorMessage.emailExist);
    });
};

//signin
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  //checking if no  record found
  if (user === null) {
    return handleError(res, {}, errorMessage.noRecordFound);
  }
  //checking if password match or not
  bcrypt.compare(password, user.dataValues.password, (err, isMatch) => {
    if (!isMatch) {
      return handleError(res, err, errorMessage.incorrectCredentials);
    } else {
      res.status(200).json({
        success: "true",
        message: successMessage.detailsVarified,
      });
    }
  });
};


//google authenitcator
exports.verifyToken = async (req, res) => {
  const { email, token } = req.body;
  //getting the user details
  const userDetails = await User.findOne({ where: { email: email } });

  //verify the google autheticator
  var verified = speakeasy.totp.verify({
    secret: userDetails.dataValues.auth_base,
    encoding: "base32",
    token: token,
  });
  if (!verified) {
    return handleError(res, {}, errorMessage.incorrectAuthenticator);
  } 
  else {
    
    //generating the jwt token 
    const user ={
      email :userDetails.dataValues.email,
      id: userDetails.dataValues.id
    } 
    jwt.sign( {user}, process.env.SECRET,{ expiresIn: '1h'},(err, data)=>{
      if(err) throw err
      else{
        res.status(200).json({
          success: "True",
          message: successMessage.login,
          key : data
      })}
    })
  }
}


//middlware for isauthenitcated 
exports.IsSignin = (req, res, next)=> {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


//signut route
exports.signout = (req, res) => {
  res.send("logout");
};
