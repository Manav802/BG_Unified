const nodemailer = require('nodemailer')
// exporting the transporter 
exports.transporter = nodemailer.createTransport({
    host:process.env.host,
    port: process.env.port, 
    secureConnection: "secure",
    auth: {
      user: process.env.user,
      pass: process.env.pass
    },
    tls: {
      rejectUnauthorized: false
    },
    ignoreTLS: false 
   
})