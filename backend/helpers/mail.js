//Mail facility using Sendgrid
const sendMAIL = require('@sendgrid/mail');

//setting up the apikey
sendMAIL.setApiKey('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')

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