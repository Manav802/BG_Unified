const { validationResult } = require("express-validator");
const { handleError } = require("../helpers/errorHandler");
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
    return res.status(200).json({
      success: true,
      message: "Report stored Successfully",
    });
  });
};
