//SMS using NEXMO 
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: '',
});

exports.sendSMS = (to, text)=>{

  nexmo.message.sendSms('Vonage APIs', to, text, {
    type: "unicode"
    },(err, data )=>{
    if(err){
        console.log("An Error has Occured")
    }
    else{
        console.log(`Message has successfully sent to ${to} `)
    }
  })
}

//Format for sending the SMS
//  sendSMS(to,text) 
