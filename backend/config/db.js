const mysql = require("mysql")

//mySQL database connection
exports.dbConnection  = () =>{
    
// for online
let connection1 = mysql.createConnection({    //got squal server account from https://www.freemysqlhosting.net/
    host: '',
    user: '',
    password:'',
    database: ''
});

//for locally
let connection2 = mysql.createConnection({  
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'bgunified' //database should be present in your localhost with this name
});

connection2.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });
  
} 