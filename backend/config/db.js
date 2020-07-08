const mysql = require("mysql")

//mySQL database connection
exports.dbConnection  = () =>{
    
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
  
} 