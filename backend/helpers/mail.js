//Mail facility using Sendgrid
const sendMAIL = require('@sendgrid/mail');

//setting up the apikey
sendMAIL.setApiKey('')

exports.sendMail =(message) =>{
    sendMAIL.send(message).then(res =>{
     
        console.log("Email sent successfully")
    })
    .catch(err =>{
        console.log("There is an error")
    })
}

//strcutre of the message
// { to, from,subject,text,html}

