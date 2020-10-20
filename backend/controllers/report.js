const { validationResult } = require("express-validator");
const { handleError } = require("../helpers/errorHandler");
const { sendMail } = require("../helpers/mail");
const Report = require("../models/report");

//submission  the report
exports.reportSubmit = async (req, res) => {
  //apply the validations result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleError(res, errors, errors.array()[0].msg, 400);
  }
  //dest. the req.body
  const {
    name,
    email,
    contactNumber,
    error,
    description,
    browser,
    device,
    operatingSystem,
  } = req.body;

  //storing the feedback
  const report = new Report({
    name,
    email,
    contactNumber,
    description,
    error,
    browser,
    device,
    operatingSystem,
  });

  report.save((err, data) => {
    if (err) {
      return handleError(res, err, "Unable to Store in DB", 503);
    }
    else{
      var emailObject={
          email:['shubh29nov@gmail.com','yuvrajsinghmidha@gmail.com'],
          subject:"BGUS's Report an Error",
          html:`
              <h1>Report for your Website</h1>
              <p>Error: ${error}</p>
              <p>Device: ${device}</p>
              <p>Browser: ${browser}</p>
              <p>Operating system: ${operatingSystem}</p>
              <p>Description: ${description}</p>
              <h1>Sender Details</h1>
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Contact No: ${contactNumber}</p>
          `
      }
      sendMail(emailObject.email,emailObject.subject,emailObject.html).then(data=>{
        return res.status(200).json({
          success: true,
          message: "Report stored Successfully",
        });
      })
      .catch(err =>{
              console.log('Error in sending mail')
      })
  }

  });
};
