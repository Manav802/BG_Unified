//Mail facility using Sendgrid
const sendMAIL = require('@sendgrid/mail');

const successMessage = {
    emailSent: "Email sent successfully"
}

const errorMessage = {
    error: "There is an error"
}

//setting up the apikey
sendMAIL.setApiKey('')

exports.sendMail =(message) =>{
    sendMAIL.send(message).then(res =>{
     
        console.log(successMessage.emailSent)
    })
    .catch(err =>{
        console.log(errorMessage.error)
    })
}

//strcutre of the message
// { to, from,subject,text,html}

