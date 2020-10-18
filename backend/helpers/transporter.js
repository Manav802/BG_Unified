const nodemailer = require('nodemailer')
// exporting the transporter 
exports.transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587, 
    secureConnection: "secure",
    auth: {
      user: "webapi@bghosted.net",
      pass: "mc68hc12@API@"
    },
    tls: {
      rejectUnauthorized: false
    },
    ignoreTLS: false 
   
})