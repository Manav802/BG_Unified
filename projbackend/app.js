const express = require('express')
const app = express()

//requiring  basic middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require('morgan')

//database
const mysql = require('mysql')

//requiring  routes
const  userRoutes = require('./api/routes/user')
const  serviceRoutes = require('./api/routes/service')

//using basic middlwares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use(morgan('dev'))

//mySQL database connection

// for online
let connection1 = mysql.createConnection({    //got squal server account from https://www.freemysqlhosting.net/
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12353294',
    password:'jGw3nnLIkl',
    database: 'sql12353294'
});

//for locally
let connection2 = mysql.createConnection({  
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'bgunified'
});

connection1.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });
  
//routes middleware
app.use("/api", userRoutes)
app.use("/api", serviceRoutes)


//exporting the file 
module.exports =app 
