//SMS using NEXMO 
const Nexmo = require('nexmo');

const successMessage = {
  messageSent: "Message has successfully sent to"
}

const errorMessage = {
  error: "An Error has Occured"
}

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: '',
});

exports.sendSMS = (to, text)=>{

  nexmo.message.sendSms('Vonage APIs', to, text, {
    type: "unicode"
    },(err, data )=>{
    if(err){
        console.log(errorMessage.error)
    }
    else{
        console.log(`${messageSent} ${to} `)
    }
  })
}

//Format for sending the SMS
//  sendSMS(to,text) 
