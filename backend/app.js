const express = require('express')
const app = express()

//requiring  basic middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require('morgan')

//database
const {dbConnection} = require('./config/db')

//routes
const  userRoutes = require('./api/routes/user')
const  serviceRoutes = require('./api/routes/service')

//using basic middlwares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use(morgan('dev'))

//database connectivity
dbConnection()

//routes middleware
app.use("/api", userRoutes)
app.use("/api", serviceRoutes)

//exporting the file 
module.exports =app 
