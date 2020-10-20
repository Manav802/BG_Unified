// importing the module
const nodemailer = require("nodemailer");
const { transporter } = require("./transporter");


// mailing function
exports.sendMail = async(to,subject,html,text) =>{
  
    // send mail with defined transport object
    await transporter.sendMail({
      from: "BGUS Support webapi@bghosted.net",
      to: to, 
      subject:subject, 
      text: text, 
      html: html},
      (err, data)=>{
        if(err){
            console.log('Error in mail',err)
        }else{
            console.log("Mail send Successfully ",data.messageId)
        }
    })
}

