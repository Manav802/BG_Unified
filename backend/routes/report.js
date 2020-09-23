const express = require("express");
const { check } = require("express-validator");
const Router = express.Router();
const { reportSubmit } = require("../controllers/report");

//submit the report
Router.post(
  "/submit",
  [
    check("name", "Name should be atleast three character")
      .exists()
      .isLength({ min: 3 }),
    check("email", "Wrong Email Syntax").isEmail(),
    check("contactNumber", "Contact detail should be Number").isNumeric(),
    check(
      "description",
      "Description should be atleast three character"
    ).isLength({ min: 3 }),
    check("error", "Please mention error").isLength({ min: 1 }),
    check("browser", "Please add browser").isLength({ min: 1 }),
    check("operatingSystem", "Please add operating system").isLength({
      min: 1,
    }),
    check("device", "Please add device").isLength({
      min: 1,
    }),
  ],
  reportSubmit
);

//exporting the file
module.exports = Router;
