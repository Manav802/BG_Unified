const express = require('express')
const app = express()

//requiring  basic middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require('morgan')
const dotenv = require('dotenv').config()

//database
const {connectionDB} = require('./config/db')

//routes
const router = require('./routeHandler/routes');

//using basic middlwares
app.use(bodyParser.json())

app.use(cookieParser())
app.use(cors());
app.use(morgan('dev'))


//database connectivity
connectionDB()

//routes middleware
app.use(router)

//exporting the file 
module.exports =app 
