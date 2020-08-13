const { handleError } = require('../helpers/errorHandler')
const User  = require('../models/user')
const  { validationResult } = require('express-validator')
const jwt  = require('jsonwebtoken')


//signUP  controller 
exports.signUp = async (req, res) =>{
  
  //apply the validations result
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return handleError(res, errors, errors.array()[0].msg)
  }


  const { firstName, lastName , email, password, confirmPassword } = req.body

  //check that password and confimm password are same or not
  if (password !== confirmPassword) {
    return handleError(res, {}, "Password does not match")
  }
  
  const user = new User(req.body)
  
  //saving the user in the databse
  user.save((err, data)=>{
    if(err){
        return handleError(res, err, "Unable to Register")
    }
    else{
        return res.status(200).json({
            type: "Success",
            message:"User Registered Successfully"
        })
    }
  })
}

//singin  route 
exports.signin = async (req,res)=>{

    const errors = validationResult(req)
    const { email, password } = req.body
    
    //validate the errorr
    if (!errors.isEmpty()) {
      return res.status(422).json({
      error: errors.array()[0].msg
      })
    }

    User.findOne({ email }, (err, user) => {

        //checking the user
        if (err || !user) {
            return  handleError(res,err,"User Does not exist")
        }

        //authenticate the user
        if (!user.autheticate(password)) {
            return handleError(res,err, "Invalid Email and Password")
        }

        //create token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET,{ expiresIn: '1h'})
        
        //send token in the header 
        res.status(200).header('Authorization',token).json({
            type: "Success",
            message :"Sign In successfully"
        })
    })
}

// IsSigned In 
exports.isSignedIn = async (req, res, next)=>{

    //checking the header 
    const token = req.header('Authorization')
    
    //if token  does not exist 
    if(!token){
        return handleError(res,{},"Access Denied")
    }
    
    //verify the toekn 
    jwt.verify(token,process.env.SECRET,(err,verified)=>{
        if(err) {
            return handleError(res, err, "Access Denied")
        }
        else{
            //attaching the user to  req 
            const id =(jwt.decode(token)._id)
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