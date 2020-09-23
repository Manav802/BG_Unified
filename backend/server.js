const http  = require('http')

//port Number
const port = process.env.PORT || 4000
const app = require('./app')


//creating the server
const server  = http.createServer(app)

server.listen(port , () =>{
    console.log(`Server is listening on Port ${port}`)
})
