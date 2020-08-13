const mongoose = require('mongoose');
const { connection } = require('./connection');

//exporting the datbase conncetivity
exports.connectionDB = async () => {
  try {
    mongoose.connect(connection,
    { useUnifiedTopology: true, useUnifiedTopology: true ,useNewUrlParser: true },(err, data)=>{
      
        if(err){ 
          throw err;
        }
        else{
          console.log("DB Connected")
        }
    })
   
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
